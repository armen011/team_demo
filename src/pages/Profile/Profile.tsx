import MainLayout from "layouts/MainLayout"
import Footer from "../../layouts/AuthLayout/Components/Footer";

import './Profile.css'

import settingIcon from '../../images/settings.png'
import UserIcon from '../../images/user.png'
import CameraIcon from '../../images/camera.png'
import PostPhoto from '../../images/posting.png'

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

            </div>

            <div className={'my_profile_show_category_part'}>
                <div className={'my_profile_show_category_active'}> POSTS </div>
                <div>SAVED</div>
                <div>TAGGED</div>
            </div>
            {/* dont have image-------------------------------------- */}
            {/*<div className={'my_profile_post_dont_have'}>*/}
            {/*    <div className={'my_profile_post_dont_have_image'}>*/}
            {/*        <img src={CameraIcon} alt="camera icon"/>*/}
            {/*    </div>*/}

            {/*    <h4>Share Photos</h4>*/}

            {/*    <div className={'my_profile_just_text'}>*/}
            {/*        When you share photos, they will appear on your profile.*/}
            {/*    </div>*/}

            {/*    <span className={'my_profile_post_dont_have_share_button'}>Share Your first Photo</span>*/}

            {/*</div>*/}


            <div className={'my_profile_posting_part'}>
                <div className={'single_post'}>
                    <img src={PostPhoto} alt=""/>
                </div>

                <div className={'single_post'}>
                    <img src={PostPhoto} alt=""/>
                </div>

                <div className={'single_post'}>
                    <img src={PostPhoto} alt=""/>
                </div>
            </div>


                <Footer/>

        </div>



    </MainLayout>
  )
}

export default Profile
