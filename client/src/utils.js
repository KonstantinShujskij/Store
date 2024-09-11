export const getTempId = () => `${Date.now().toString(16)}-${parseInt(Math.random() * 1000000)}`

export const renameFile = (file, newName) => {
    const name = file.name
    const extend = name.substr(name.indexOf('.'), name.length)
    const newFile = new File([file], newName + extend, {type: file.type})
    
    return newFile
}