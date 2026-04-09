import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-b-xl'>
                <form className='flex flex-col items-center justify-center'
                    onSubmit={(e) => { submithandler(e) }} >
                    <input required
                        className='border-2 border-emerald-600 outline-none py-3 px-5 bg-transparent  rounded-full placeholder: '
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    <br />
                    <input
                        required
                        className='border-2 border-emerald-600 outline-none py-3 px-5 bg-transparent  rounded-full placeholder: '
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        placeholder='Enter your password' />
                    <br />
                    <button className='mt-5 bg-emerald-600 outline-none py-3 px-5 border-none  rounded-full placeholder: '>Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login