import useInput from './input.hook'


export default function useContacts() {
    const name = useInput('')
    const lastname = useInput('')
    const email = useInput('')
    const phone = useInput('')

    const getValue = () => ({
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value
    })

    return {
        bind: { name, lastname, email, phone },
        getValue        
    }
}
