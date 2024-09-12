import { renameFile } from './utils'


export const parseColors = (colorsData) => {
    const files = []
    
    const handler = (item) => {
        const fileName = item._id
        if(!!item.file) { files.push(renameFile(item.file, fileName)) }
        return { title: item.title, file: item.file? fileName : false, src: item.file? false : item.src }
    }

    const colors = colorsData.map((color) => {
        const newColor = handler(color)
        newColor.design = color.design.map(handler)
        return newColor
    })

    return { colors, files }
}