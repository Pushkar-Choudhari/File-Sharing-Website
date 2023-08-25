import { React, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const registerUser = async (e) => {

        const { username, email, password } = data
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8800/auth/register", {
                username, email, password
            })
            console.log(response)
            if (response.status === 200) {
                navigate("/Login")
            }
        } catch (err) {
            console.log(err)
        }

    }
    const loginPage = () => {
        navigate("/Login")
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={registerUser}>
                <label>Username</label>
                <input type='text' placeholder='Enter Username' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                <label>Email</label>
                <input type='email' placeholder='Enter Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label>Password</label>
                <input type='password' placeholder='Enter Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
            <button className="link-btn" onClick={loginPage}>Already have an account? Login here.</button>
        </div>
    )
}
