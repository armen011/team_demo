import './ProfileCategory.css'
import {FC} from "react";
import {useNavigate} from "react-router-dom";

export type CategoryType={
    name:string;
    path:string;
    isActive:boolean;
    setActivation:(name: string)=>void
}

const ProfileCategory:FC<CategoryType> = ({name,path,isActive,setActivation}) =>{

    const navigate = useNavigate()
    return(

        <div className={isActive ? 'my_profile_show_category_active' : ''}
                         onClick={()=>{
                             navigate('/loading', {state: path})
                             setActivation(name)
                         }}>{name}</div>
    )
}

export default ProfileCategory;