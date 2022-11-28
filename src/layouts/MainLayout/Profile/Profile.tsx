import React from 'react';
import {useNavigate} from "react-router-dom";

function Profile() {
    const navigate = useNavigate()

    return (
        <div>
            Personal Page

            <button onClick={() => navigate('/')}>  Back to Menu</button>
        </div>
    );
}

export default Profile;