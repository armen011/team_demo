import './Highlight.css'
import {FC} from "react";
export type HighlightType={
    text:string
    image:string
}

const Highlight:FC<HighlightType> = ({image,text}) =>{
    return(

            <div className={'my_profile_single_highlight'}>

                <div className={'my_profile_highlight_frame'}>
                    <img src={image} className='story_image' alt="story"/>
                </div>

                <div className='my_profile_highlight_text'>
                    {text}
                </div>

            </div>
    )
}

export default Highlight