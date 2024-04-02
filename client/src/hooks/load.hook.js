import { useEffect } from 'react'


export default function useLoad(callback) {
    useEffect(() => { (async () => await callback())() }, [])
}