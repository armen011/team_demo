import MainLayout from "layouts/MainLayout"

import './Profile.css'

import settingIcon from '../../images/settings.png'
import UserIcon from '../../images/user.png'

const Profile = () => {
  return (
    <MainLayout>
        <div className={'my_profile'}>
            <div className={'upper_part'}>
                <div className={'my_profile_image'}>
                    <img src={UserIcon} alt={'Change image'}/>
                </div>

                <div className={'my_profile_about'}>

                    <div className={'my_profile_name_part'}>
                        <div className={'my_profile_name_text'}><span>abayvazyan</span></div>

                        <div className={'my_profile_edit_part'}>
                           <div className={'my_profile_edit_button'}>Edit profile</div>
                        </div>

                        <div className={'my_profile_setting_part'}>
                            <img src={settingIcon} alt="Settings"/>
                        </div>
                    </div>

                    <div className={'my_profile_counts_part'}>
                        <div><span>3</span>  post</div>
                        <div className={'followers_count'}><span>333</span> followers</div>
                        <div className={'following_count'}><span>333</span>  following</div>
                    </div>


                    <div>Bio About Me</div>
                </div>
            </div>

            {/*Story*/}

            <div className={'my_profile_highlight_part'}>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

                <div className={'my_profile_single_highlight'}>

                    <div className={'my_profile_highlight_frame'}>
                        <img src={UserIcon} className={'story_image'}/>
                    </div>

                    <div className={'my_profile_highlight_text'}>
                        Highlight
                    </div>

                </div>

            </div>
        </div>
    </MainLayout>
  )
}

export default Profile
