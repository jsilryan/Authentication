import React, {useEffect} from 'react';

import axios from 'axios';

const TestBackend = () => {
    const config = {
        headers: {
            // 'redirect' : 'follow'
            "Content-Type" : "application/json"
        }
    };
    const testConnection = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/test/test`, config);
            console.log(response.data);
        } catch (error) {
            console.error('Error testing backend connection:', error);
        }
    };

    useEffect(() => {
        testConnection();
    }, []);

    return (
        <div>
            <h1>Testing Backend Connection</h1>
            {/* You can display loading indicator or any other UI elements here */}
        </div>
    );
};

export default TestBackend;
