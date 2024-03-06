import axios from 'axios'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL
} from './types'

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('access')}`,
                'Accept' : 'application/json'
            }
        };
        try {
            // /users/me -> Endpoint by Djoser that returns the User
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config) // Make sure there is a slash at the end to avoid errors
    
            dispatch({
                type: USER_LOADED_SUCCESS, 
                payload: response.data
            })
        }
        catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            })
        }
    }
    else {
        dispatch({
            type: USER_LOADED_FAIL
        })
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        password
    })

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config) // Make sure there is a slash at the end to avoid errors

        dispatch({
            type: LOGIN_SUCCESS, 
            payload: response.data
        })

        console.log(`Response Data: ${JSON.stringify(response.data)}`)
        // Once you are logged in, you are loaded into the system
        dispatch(load_user());
    }
    catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
        console.log(`Error: ${err}`)
    }
}
