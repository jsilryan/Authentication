import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container" style={{backgroundColor: '#e4e4e4', paddingBottom: '15px', paddingTop: '15px'}}>
            <div className="jumbotron mt-5" >
                <h1 className="display-4">Welcome to Elexis!</h1>
                <p className="lead">Rent your car or rent a car!</p>
                <hr className="my-4" />
                <p>Click below to Log In</p>
                <Link className="btn btn-primary btn-lg" to="/login" role="button">Login</Link>
            </div>
        </div>
    )
}