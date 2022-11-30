import MainLayout from "layouts/MainLayout"
import {useLocation} from "react-router-dom";


const Messages = () => {
    const {state: {text}} = useLocation()

    return (<MainLayout routeInfo={text}>
        <div>Message component</div>
    </MainLayout>
  )
}

export default Messages
