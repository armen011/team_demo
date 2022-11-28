import AuthLayout from "layouts/AuthLayout";
import {useTranslation} from "react-i18next";
import RegistrationForm from "./Components/RegistrationForm";
import "./Registration.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAppSelector} from "../../app";

const Registration = () => {
    const isChecked = useAppSelector(s=>s.registration.isChecked);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/login');
    };

    const {t} = useTranslation();
    return (
        <AuthLayout>
            {
                !isChecked
                    ?
                    <div className="registration_content_wrapper">
                        <div className="registration_box">
                            <div className="registration_logo_wrapper">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                                    alt=""
                                    width={176}
                                />
                            </div>
                            <h4 className="header_title">
                                {t("sign_up_to_see_photos_and_videos_from_your_friends")}
                            </h4>
                            <RegistrationForm/>
                        </div>
                        <div className="route_to_login">
                            <p>{t("have_an_account")}
                                <a href="" onClick={handleNavigate}> {t("login")}</a>
                            </p>
                        </div>
                        <div className="get_the_app">
                            <p>{t("Get the app.")}</p>
                            <div className="pictures_div">
                                <img
                                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                                    alt=""
                                />

                                <img
                                    src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        Aram
                    </div>
            }
        </AuthLayout>
    );
};

export default Registration;
