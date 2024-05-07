import { useState } from "react"

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'FemiDev',
            email: 'femidev@email.com',
        })
    }

    const handleLogout = () => {
        setUser({name: '', email: ''})
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username is {user.name}</div>
            <div>User email is {user.email} </div>
        </div>
    )
}