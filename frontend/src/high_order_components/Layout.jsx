import React, { useEffect } from "react";
import Navbar from '../components/Navbar'

import { connect } from "react-redux";

import {checkAuthenticated, load_user} from "../actions/auth";

function Layout(props) {
    useEffect(() => {
        props.checkAuthenticated()
        props.load_user()
    }, [])
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default connect(null, {checkAuthenticated, load_user})(Layout)
// Null as we don't need the auth states