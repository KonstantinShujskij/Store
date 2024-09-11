import useApi from '../hooks/api.hook'
import { renameFile } from '../utils'

export default function useProductsApi() {
    const { publicRequest, protectedRequest } = useApi()

    const list = async (filter={}) => {
        try { return await publicRequest('api/products/list', {filter}) }
        catch(error) { return [] } 
    } 

    const get = async (id) => {
        try { return await publicRequest('api/products/get', {id}) }
        catch(error) { return null } 
    } 

    const create = async ({title, desc, price, category, collection, prop, materials, colors}, photos) => {
        const tempFiles = []
        const tempColors = []

        colors.forEach((color) => {
            const fileName = `C-${color._id}`
            if(!!color.file) { tempFiles.push(renameFile(color.file, fileName)) }
            const tempColor = {title: color.title, file: color.file? fileName : false, src: color.file? false : color.src, design: []}
            
            const tempDesigns = []
            color.design.forEach((design) => {
                const fileName = `D-${design._id}`
                if(!!design.file) { tempFiles.push(renameFile(design.file, fileName)) }
                tempDesigns.push({title: design.title, file: design.file? fileName : false, src: design.file? false : design.src})
            })
            tempColor.design = tempDesigns

            tempColors.push(tempColor)
        })
        
        const data = {
            title, desc, price, category, collection, 
            prop: JSON.stringify(prop), 
            materials: JSON.stringify(materials),
            colors: JSON.stringify(tempColors)
        }

        const form = new FormData()
        
        for(let key in data) { form.append(key, data[key]) }
        photos.forEach((item) => form.append('photos', item.file))
        tempFiles.forEach((file) => form.append('photosColor', file))

        try { return await protectedRequest('api/products/create', form, 'form') }
        catch(error) { return null } 
    } 
    
    const update = async (id, {title, desc, price, category, collection, prop, materials, colors}, photos=[], existPhotos=[]) => {
        const data = {title, desc, price, category, collection, prop: JSON.stringify(prop), materials: JSON.stringify(materials)}
        const form = new FormData()
        form.append('id', id)

        for(let key in data) { form.append(key, data[key]) }
        photos.forEach((item) => form.append('photos', item.file))
        existPhotos.forEach((item) => form.append('existPhotos', item.file.name))
       
        try { return await protectedRequest('api/products/update', form, 'form') }
        catch(error) { return null } 
    } 

    const remove = async (id) => {
        try { return await protectedRequest('api/products/remove', {id}) }
        catch(error) { return false } 
    }

    return { 
        create,
        remove,
        update,
        get,
        list
    }
}