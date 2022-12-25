import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import {useEffect} from "react";


const Loading = () => {
    const location = useLocation()
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state === '/profile'){
            navigate('/profile')
        }else if (location.state === '/profile/saved'){
            navigate('/profile/saved')
        }else{
            navigate(`/users/${location.state}`)
        }
    },[])
    return (
        <div>

        </div>
    )
}

export default Loading;