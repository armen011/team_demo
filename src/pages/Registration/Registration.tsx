import AuthLayout from "layouts/AuthLayout"
import {useAppSelector} from "app";
import MainForm from "./MainForm";
import DateForm from "./DateForm";

const Registration = () => {
    const isChecked = useAppSelector(s=>s.registration.isChecked);
    return (
        <AuthLayout>
            {!isChecked?<MainForm/>:<DateForm/>}
        </AuthLayout>
    );
};

export default Registration;
