import React from 'react'

const Login = () => {
    return (
        <form onSubmit={undefined}>
            <input placeholder="email" value={undefined} email="email" type='text' onChange={undefined} />
            <input placeholder="password" value={undefined} password="password" type='text' onChange={undefined} />
            <input type="submit" value="Log in" />
        </form>
    )
}
export default Login