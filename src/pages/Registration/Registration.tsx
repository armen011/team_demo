import AuthLayout from "layouts/AuthLayout"
import { useTranslation } from "react-i18next"
import BirthdayPage from "./BirthdayPage"

const Registration=()=>{
    const {t,i18n} = useTranslation();
    
    return<AuthLayout>
        <div>
            <BirthdayPage/>
        </div>
    </AuthLayout>
}

export default Registration