import React from 'react';
import {useNavigate} from "react-router-dom";

function Messages() {

    const navigate = useNavigate()
    return (
        <div>
            Massages page

           <button onClick={() => navigate('/')}>Back to Menu</button>
        </div>
    );
}

export default Messages;