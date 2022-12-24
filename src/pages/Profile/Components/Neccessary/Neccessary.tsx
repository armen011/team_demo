import './Neccessary.css'
import CameraIcon from '../../../../images/camera.png'
import {useContext} from "react";
import {context} from "../../../../AppContainer/App";


const Neccessary = () =>{

    const createContext = useContext(context)

    return(
        <div className={'my_profile_post_dont_have'}>
        <div className={'my_profile_post_dont_have_image'}>
            <img src={CameraIcon} alt="camera icon"/>
        </div>

        <h4>Share Photos</h4>

        <div className={'my_profile_just_text'}>
            When you share photos, they will appear on your profile.
        </div>

        <span className={'my_profile_post_dont_have_share_button'} onClick={() => createContext?.setIsCreateModalOpened(true)}>Share Your first Photo</span>

    </div>
    )
}

export default Neccessary