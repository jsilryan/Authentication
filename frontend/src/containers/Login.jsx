import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../actions/auth";

function Login({ login, isAuthenticated }) {
    const navigate = useNavigate() 

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    function onChange(e) {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name] : value
        })
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    function onSubmit(e) {
        e.preventDefault()
        login(email, password)
    }

    if (isAuthenticated) {
        navigate("/")
    }


    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit = {e => onSubmit(e)}>
                <div className = "form-group">
                    <input
                        className="form-control"
                        type = "email"
                        placeholder="Email"
                        name = "email"
                        value={email}
                        onChange = {e => onChange(e)}
                        required
                    />
                </div>
                <div className = "form-group mt-2">
                    <input
                        className="form-control"
                        type = "password"
                        placeholder="Password"
                        name = "password"
                        value={password}
                        onChange = {e => onChange(e)}
                        required
                        minLength='6'
                    />
                </div>
                <button className="btn btn-primary mt-2" type = 'submit'>Login</button>
            </form>
            <p className="mt-3">
                Don't have an account? <Link to = "/signup">Sign Up</Link>
            </p>
            <p className="mt-3">
                Forgot your Password? <Link to = "/reset-password">Reset Password</Link>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);