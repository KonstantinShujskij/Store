import { useEffect, useState } from 'react'


export default function usePaginate(count=1, current=1, callback=()=>{}) {
    const [page, setPage] = useState(current)
    const [limit, setLimit] = useState(10)

    const Len = Math.ceil(count / limit)

    const back = () => {
        const nextPage = page > 1? page - 1 : 1
        callback(nextPage, limit)
        setPage(nextPage)
    } 

    const next = () => {
        const nextPage = page < Len? page + 1 : Len
        callback(nextPage, limit)
        setPage(nextPage)
    } 

    useEffect(() => callback(page, limit), [limit])
    
    return { 
        bind: { page, limit, next, back, setLimit },
        page,
        limit
    }
}