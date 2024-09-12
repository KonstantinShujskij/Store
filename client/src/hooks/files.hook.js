import { useState } from 'react'

export default function useFiles(type='image') {
    const [list, setList] = useState([])

    const upload = (event) => {
        if(!event.target.files) { return }
        const files = Array.from(event.target.files)

        files.forEach((file) => {
            if(type && !file.type.match(type)) { return }

            const reader = new FileReader()
            reader.onload = (ev) => add(ev.target.result, file)
            reader.readAsDataURL(file)
        })
    }

    const add = (img, file, exist=false) => {
        setList((prew) => ([{img, file: file, id: (Date.now()) + file.name, exist}, ...prew]))
    }

    const remove = (id) => { setList((prew) => prew.filter((item) => (item.id !== id))) }
    const clear = () => setList([])

    return {
        list,
        upload,
        add,
        remove,
        clear
    }
}