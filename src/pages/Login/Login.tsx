import { login } from "features/user"
import { useDispatch } from "react-redux"
import { useTranslation } from 'react-i18next';
import LoginWraper from "./Components/LoginWrapper";

const Login=()=>{
const {t,i18n}=useTranslation()
    // const dispatch = useDispatch()
    // const handleLogIn=()=>{
    //    dispatch(login({login:"armen21",passowrd:'Armen.21.06'})) 
    // }
    {/* <button onClick={handleLogIn}>{t('login')}</button>
    <button onClick={()=>{i18n.changeLanguage('hy')}}>Change Language</button> */}
    
    return<div>
            <LoginWraper/>
        </div>
}

export default Login