import './StoryComponent.css';
import {useState} from "react";
import userIcon from 'assets/images/user.png'
import {useNavigate} from "react-router";


const StoryComponent = () => {
    const [localStory, setLocalStory] = useState([
        {
            username: 'Arman',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Abo',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'AboA',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Artur',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Aram',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Armen',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Yardages',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Puyol',
            id: Math.random(),
            isActive: true,
        },
        {
            username: 'Messi',
            id: Math.random(),
            isActive: true,
        },
    ])
    const navigate = useNavigate()

    return (
        <div className='story_container'>
            {localStory.map(elem=> {
                return <div className='each_story_wrapper' key={elem.id} onClick={() => navigate(`/stories/${elem.id}`)}>
                    <div className='each_story' >
                        <img className='story_picture' src={userIcon} alt=""/>
                    </div>
                    <span className='story_name'>{elem.username}</span>
                </div>
            })}
        </div>
    )
}

export default StoryComponent;