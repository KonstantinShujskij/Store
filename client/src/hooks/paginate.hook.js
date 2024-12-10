import { useEffect, useState } from 'react'


export default function usePaginate(count=1, current=1, callback=()=>{}) {
    const [page, setPage] = useState(current)
    const [range, setRange] = useState(10)

    const Len = Math.ceil(count / range)

    const back = () => {
        const nextPage = page > 1? page - 1 : 1
        callback(nextPage, range)
        setPage(nextPage)
    } 

    const next = () => {
        const nextPage = page < Len? page + 1 : Len
        callback(nextPage, range)
        setPage(nextPage)
    } 

    useEffect(() => callback(page, range), [range])
    
    return { 
        bind: { page, range, next, back, setRange },
        page,
        range
    }
}