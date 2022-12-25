import './ProfileCategory.css'
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export type CategoryType={
    name:string;
    path:string | undefined;
    isActive:boolean;
    setActivation:(name: string)=>void
}

const ProfileCategory:FC<CategoryType> = ({name,path,isActive,setActivation}) =>{

    const navigate = useNavigate()
    const {t} = useTranslation()

    return(

        <div className={isActive ? 'my_profile_show_category_active' : ''}
                         onClick={()=>{
                             navigate('/loading', {state: path})
                             setActivation(name)
                         }}>{t('POSTS')}</div>
    )
}

export default ProfileCategory;