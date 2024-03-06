import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import Home from './containers/Home'
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import Reset_Password from "./containers/ResetPassword";
import Reset_Password_Confirm from "./containers/ResetPasswordConfirm";
import Layout from "./high_order_components/Layout";

import { Provider } from 'react-redux'
import store from "./store";
import TestBackend from "./containers/Test";

export default function App () {{
    return (
        <Provider store = {store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path = "/test" element = {<TestBackend />} />
                        <Route path = "/" element = {<Home />} />
                        <Route path = "/login" element = {<Login />} />
                        <Route path = "/signup" element = {<Signup />} />
                        <Route path = "/activate/:uid/:token" element = {<Activate />} /> {/* Same as that in the backend */}
                        <Route path = "/reset-password" element = {<Reset_Password />} />
                        <Route path = "/password/reset/confirm/:uid/:token" element = {<Reset_Password_Confirm />} /> {/* Same as that in the backend */}
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    )
}}