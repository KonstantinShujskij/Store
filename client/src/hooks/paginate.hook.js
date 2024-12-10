import { useState } from 'react'


export default function usePaginate(initCount=1, current=1, initLimit=10) {
    const [page, setPage] = useState(current)
    const [limit, setLimit] = useState(initLimit)
    const [count, setCount] = useState(initCount)

    const back = () => {
        const nextPage = page > 1? page - 1 : 1
        setPage(nextPage)
    } 

    const next = () => {
        const Len = Math.ceil(count / limit)
        const nextPage = page < Len? page + 1 : Len
        setPage(nextPage)
    } 
    
    return { 
        bind: { page, limit, next, back, setLimit },
        setLimit,
        setCount,
        page,
        limit
    }
}