import './Story.css'
import instagram from 'assets/images/normal_instagram.svg'
import {useNavigate} from "react-router";
const Story = () => {
    const navigate = useNavigate()


    return (
        <div className='story_wrapper'>
            <img className='story_logo' src={instagram} alt="" onClick={() => navigate('/')}/>
            <div className='story_video'>

            </div>
        </div>
    )
}

export default Story;