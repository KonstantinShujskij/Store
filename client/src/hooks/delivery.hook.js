import useInput from './input.hook'


export default function useDelivery() {
    const country = useInput('')
    const index = useInput('')
    const town = useInput('')
    const adres = useInput('')
    const note = useInput('')


    const getValue = () => ({
        country: country.value,
        index: index.value,
        town: town.value,
        adres: adres.value,
        note: note.value
    })

    return {
        bind: {country, index, town, adres, note},
        getValue
    }
}