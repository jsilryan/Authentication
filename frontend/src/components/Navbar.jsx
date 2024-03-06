import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth"

function Navbar({ logout, isAuthenticated }) {
    const style = {
        padding: "15px",
        marginBottom: "10px",
    }

    function guestLinks () {
        return(
            <Fragment>
                <Link class="nav-item nav-link" to="/signup">Signup</Link>
                <Link class="nav-item nav-link" to="/login">Login</Link>
            </Fragment>
        )
    }

    function authLinks () {
        return (
            <Link class="nav-item nav-link" to="#!" onClick={logout}>Logout</Link>
        )
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style = {style}>
                <Link class="navbar-brand" to="/">Elexis</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                        {
                            isAuthenticated ? authLinks() : guestLinks()
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated 
})

export default connect(mapStateToProps, {logout})(Navbar)