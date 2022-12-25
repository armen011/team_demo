import './Settings.css'
import MenuBar from "components/MenuBar";
import {useAppDispatch, useAppSelector} from "app";
import {refreshPage} from "features/user";
import {useState} from "react";
import {useNavigate} from "react-router";

type TpasswordValues = {
    newPassword: string;
    newPasswordShow: boolean;
    resetNewPassword: string;
    resetNewPasswordShow: boolean;
}

const initialState: TpasswordValues = {
    newPassword: '',
    resetNewPassword: '',
    resetNewPasswordShow: false,
    newPasswordShow: false
}

const Settings = () => {

    const dispatch = useAppDispatch();
    const [passwordValues, setPasswordValues] = useState<TpasswordValues>(initialState);
    const [updateMessage, setUpdateMessage] = useState<string>('');
    const [isClicked, setClick] = useState<boolean>(false);
    const [deletePopUp, setDeletePopUp] = useState<boolean>(false)
    const navigate = useNavigate();
    const deleteUser = useAppSelector(state => state.user);

    const handleNewPassword = (e: { target: HTMLInputElement }) => {
        setPasswordValues((prevState) => {
            return {...prevState, newPassword: e.target.value}
        })
    }
    const handleResetNewPassword = (e: { target: HTMLInputElement }): void => {
        setPasswordValues((prevState) => ({...prevState, resetNewPassword: e.target.value}))
    }

    const deleteUserFunc = (): void => {
        fetch(
            `http://localhost:8800/api/users/${deleteUser._id}`,
            {
                method: "DELETE",
                body: JSON.stringify({
                    userId: deleteUser._id
                }),
                headers: {"Content-Type": "application/json"}
            },
        )
            .then((res) => res.json()).then(res => {
        })
        dispatch(refreshPage())
    }

    const comparePasswords = (): boolean => {
        return passwordValues.newPassword === passwordValues.resetNewPassword
    }
    const updateUser = (): void => {
        if (comparePasswords()) {
            fetch(
                `http://localhost:8800/api/users/${deleteUser._id}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        userId: deleteUser._id,
                        password: passwordValues.newPassword
                    }),
                    headers: {"Content-Type": "application/json"}
                },
            )
                .then((res) => res.json()).then(res => {
                setUpdateMessage(res);
                setPasswordValues((prev) => ({...prev, newPassword: '', resetNewPassword: ''}));
                setClick(true);
            })
        } else {
            setUpdateMessage('');
            setClick(true);
        }
    }


    return (
        <div className='settings_wrapper'>
            <MenuBar/>

            {deletePopUp && <div className='delete_popup'>
                <div className='delete_popup_container'>
                    <p style={{textAlign: "center", marginTop: "10px"}}>Are you sure that you want to delete your account</p>
                    <div className='confirm_deleting_buttons_div'>
                        <button style={{marginTop: "10px"}} className='reset_password_submit'
                                onClick={() =>{
                                    setDeletePopUp(false)
                                }
                                }>Cancel
                        </button>
                        <button className='reset_password_submit_deleting' onClick={() => {
                            localStorage.clear()
                            deleteUserFunc()
                        }
                        }>Delete</button>
                    </div>
                </div>
            </div>}
            <div className='settings_container'>
                <div className='settings'>
                    <div className='reset_password'>
                        <p style={{textAlign: "center", marginTop: "10px"}}>Reset Password</p>
                        <input
                            value={passwordValues.newPassword}
                            placeholder='Input New Password'
                            className='reset_password_input'
                            onChange={handleNewPassword}
                            type={passwordValues.newPasswordShow ? 'text' : "password"}
                        />
                        {passwordValues.newPassword.trim() && <p className="new_password_show"
                                                                 onClick={() => setPasswordValues((p) => ({
                                                                     ...p,
                                                                     newPasswordShow: !passwordValues.newPasswordShow
                                                                 }))}
                        >
                            {passwordValues.newPasswordShow ? 'Hide' : 'Show'}
                        </p>}
                        <input
                            type={passwordValues.resetNewPasswordShow ? 'text' : "password"}
                            value={passwordValues.resetNewPassword}
                            placeholder='Confirm New Password'
                            onChange={handleResetNewPassword}
                            className='reset_password_input'
                        />
                        {passwordValues.resetNewPassword.trim() &&
                            <p className="reset_password_show"
                               onClick={() => setPasswordValues((p) => ({
                                   ...p,
                                   resetNewPasswordShow: !passwordValues.resetNewPasswordShow
                               }))}
                            >{passwordValues.resetNewPasswordShow ? 'Hide' : 'Show'}</p>}

                        <div className='reset_password_buttons'>
                            <button
                                className='reset_password_cancel'
                                onClick={() => navigate(-1)}>Cancel
                            </button>
                            <button
                                className='reset_password_submit'
                                onClick={updateUser}>Submit
                            </button>
                        </div>
                    </div>

                    <div className='delete_account'>
                        <button onClick={() => {
                            setDeletePopUp(true)
                        }} className='delete_account_button'>Delete Account
                        </button>
                    </div>

                    <div className='delete_account'>
                        <button onClick={() => dispatch(refreshPage())} className='logout_account_button'>Log out
                        </button>
                    </div>
                    {
                        isClicked && (!!updateMessage ? <div className='delete_account'>
                            <p>{updateMessage}</p>
                        </div> : <div className='delete_account'>
                            <p>
                                New and confirmation passwords should be same
                            </p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Settings;