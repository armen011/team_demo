import './ProfileCategory.css'
import {FC} from "react";

export type CategoryType={
    name:string;
    path:string;
    isActive:boolean;
    setActivation:(name: string)=>void
}

const ProfileCategory:FC<CategoryType> = ({name,path,isActive,setActivation}) =>{

    return(
        <>
        {/*// <div className={isActive?'my_profile_show_category_active':''}*/}
        {/*//      onClick={()=>{*/}
        {/*//          setActivation(name)*/}
        {/*//      }}>{name}</div>*/}
        <div className={isActive ? 'my_profile_show_category_active' : ''}
                         onClick={()=>setActivation(name)}>{name}</div>
        </>
    )
}

export default ProfileCategory;