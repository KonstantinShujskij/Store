import React from 'react'
import useAuth from '../hooks/auth.hook'


function Account() {
    const { logout } = useAuth()

    return (
        <div>
            Account

            <div onClick={logout}>Logout</div>
        </div>
    )
}

export default Account