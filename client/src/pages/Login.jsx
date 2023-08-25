import { React, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const loginUser = async (e) => {
        const { username, password } = data
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8800/auth/login", {
                username, password
            })
            console.log(response)
            if (response.status === 200) {
                navigate(`/Files/${response.data._id}`)
            }
        } catch (err) {
            alert(err.message)
        }

    }
    const registerPage = () => {
        navigate("/")
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form onSubmit={loginUser} className="login-form">
                <label>Name</label>
                <input type='text' placeholder='Enter Name' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                <label>Password</label>
                <input type='password' placeholder='Enter Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
            <button className="link-btn" onClick={registerPage}>Don't have an account? Register Here</button>
        </div>
    )
}
