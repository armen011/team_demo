import MainLayout from "layouts/MainLayout"
import {useLocation} from "react-router-dom";

const Profile = () => {
  const {state: {text}} = useLocation()

  return (
    <MainLayout routeInfo={text}>
    <div>Profile</div>
    </MainLayout>
  )
}

export default Profile
