import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../actions/auth";

function Login({ login }) {
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

    function onSubmit(e) {
        e.preventDefault()
        login(email, password)
    }

    // Is user authenticated
    // Redirect to home page


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
    // isAuthenticated
})

export default connect(null, { login })(Login);