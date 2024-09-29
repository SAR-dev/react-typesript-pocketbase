import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
        // API endpoint for creating a new user
        const apiUrl = 'http://127.0.0.1:8090/api/collections/users/records';

        // Form data to be sent in the request body
        const formData = {
            email: email,
            password: password,
            passwordConfirm: password,
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
            .then(() => {
                setEmail("")
                setPassword("")
                navigate("/sign-in")
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="grid grid-cols-1 gap-3 w-96 p-5 rounded-lg border border-gray-300">
                <div className="text-xl font-semibold text-center">Welcome To Keep Clone</div>
                <input className="border border-gray-300 p-3 rounded bg-white" type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="border border-gray-300 p-3 rounded bg-white" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className="w-28 rounded bg-blue-500 py-3 mx-auto" onClick={handleSubmit}>Create Account</button>
                <div>Already have an account ? Go to <Link className='bg-gray-300 p-2' to={"/sign-in"}>Sign In</Link> page</div>
                <div>{message}</div>
            </div>
        </div>
    )
}

export default SignUp