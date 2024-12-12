import useApi from '../hooks/api.hook'

import { parseColors } from '../utils/colors.utils'


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

    const setSoldOut = async (id, soldOut) => {
        try { return await publicRequest('api/products/set-soldout', {id, soldOut}) }
        catch(error) { return null } 
    } 

    const create = async ({title, desc, price, category, collection, prop, materials, colors}, photos) => {
        const colorData = parseColors(colors)
        
        const data = {
            title, desc, price, category, collection, 
            prop: JSON.stringify(prop), 
            materials: JSON.stringify(materials),
            colors: JSON.stringify(colorData.colors)
        }

        const form = new FormData()
        
        for(const key in data) { form.append(key, data[key]) }
        photos.forEach((item) => form.append('photos', item.file))
        colorData.files.forEach((file) => form.append('photosColor', file))

        try { return await protectedRequest('api/products/create', form, 'form') }
        catch(error) { return null } 
    } 
    
    const update = async (id, {title, desc, price, category, collection, prop, materials, colors}, photos=[], existPhotos=[]) => {
        const colorData = parseColors(colors)
        
        const data = {
            title, desc, price, category, collection, 
            prop: JSON.stringify(prop), 
            materials: JSON.stringify(materials),
            colors: JSON.stringify(colorData.colors)
        }

        const form = new FormData()
        form.append('id', id)

        for(const key in data) { form.append(key, data[key]) }
        photos.forEach((item) => form.append('photos', item.file))
        existPhotos.forEach((item) => form.append('existPhotos', item.file.name))
        colorData.files.forEach((file) => form.append('photosColor', file))
       
        try { return await protectedRequest('api/products/update', form, 'form') }
        catch(error) { return null } 
    } 

    const remove = async (id) => {
        try { return await protectedRequest('api/products/remove', {id}) }
        catch(error) { return false } 
    }

    const recomends = async () => {
        try { return await protectedRequest('api/products/recomend') }
        catch(error) { return [] } 
    }

    return { 
        create,
        remove,
        update,
        recomends,
        get,
        list,
        setSoldOut
    }
}