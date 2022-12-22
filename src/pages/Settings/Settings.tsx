import './Settings.css'
import MenuBar from "components/MenuBar";
import {useAppDispatch} from "app";
import {refreshPage} from "features/user";
import {useState} from "react";
import {useNavigate} from "react-router";

const Settings = () => {

    const dispatch = useAppDispatch()
    const [deletePopUp, setDeletePopUp] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <div className='settings_wrapper'>
            <MenuBar/>

            {deletePopUp && <div className='delete_popup'>
                <div className='delete_popup_container'>
                    <p style={{textAlign: "center", marginTop: "10px"}}>To continue deleting account you should confirm your username</p>
                    <input style={{fontSize: '16px'}} className='delete_input' type="text" placeholder='Input username'/>
                    <div className='confirm_deleting_buttons_div'>
                        <button style={{marginTop: "10px"}} className='reset_password_submit' onClick={() => setDeletePopUp(false)}>Cancel</button>
                        <button className='reset_password_submit_deleting'>Submit</button>
                    </div>
                </div>
            </div>}
            <div className='settings_container'>
                <div className='settings'>
                    <div className='reset_password'>
                        <p style={{textAlign: "center", marginTop: "10px"}}>Reset Password</p>
                        <input className='reset_password_input' type="text" placeholder='  Input New Password'/>
                        <input className='reset_password_input' type="text" placeholder='  Confirm New Password'/>
                        <div className='reset_password_buttons'>
                            <button className='reset_password_cancel'>Cancel</button>
                            <button className='reset_password_submit'>Submit</button>
                        </div>
                    </div>

                    <div className='delete_account'>
                        <button onClick={() => setDeletePopUp(true)} className='delete_account_button'>Delete Account</button>
                    </div>

                    <div className='delete_account'>
                        <button onClick={() => dispatch(refreshPage())} className='logout_account_button'>Log out</button>
                    </div>
                    <div className='delete_account'>
                        <button className='logout_account_button' onClick={() => navigate('/')}>Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;