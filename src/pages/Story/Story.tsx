import './Story.css'
import instagram from 'assets/images/normal_instagram.svg'
import testVideo from 'assets/videos/video_example.mp4'
import {useNavigate} from "react-router";
const Story = () => {
    const navigate = useNavigate()

    return (
        <div className='story_wrapper'>
            <img className='story_logo' src={instagram} alt="" onClick={() => navigate('/')}/>
            <div className='story_video'>
                <video controls autoPlay loop muted>
                <source src={testVideo}/>
                </video>
            </div>
        </div>
    )
}

export default Story;