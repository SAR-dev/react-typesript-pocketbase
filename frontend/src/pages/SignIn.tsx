import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
        // API endpoint for creating a new user
        const apiUrl = 'http://127.0.0.1:8090/api/collections/users/auth-with-password';

        // Form data to be sent in the request body
        const formData = {
            identity: email,
            password: password,
        };

        // Make a POST request using the Fetch API
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((res) => {
                // console.log(res.token)
                localStorage.setItem("auth", res.token)
                navigate("/")
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="grid grid-cols-1 gap-3 w-96 p-5 rounded-lg border border-gray-300">
                <div className="text-2xl font-semibold text-center mb-5">Welcome Back</div>
                <input className="input input-bordered" type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="input input-bordered" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button disabled={email.length == 0} className="w-full btn btn-primary" onClick={handleSubmit}>Sign In</button>
                <div>Don't have an account ? Go to <Link className='bg-gray-300 p-2' to={"/sign-up"}>Sign Up</Link> page</div>
                <div>{message}</div>
            </div>
        </div>
    )
}

export default SignIn