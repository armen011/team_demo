import { BrowserRouter,Routes } from "react-router-dom"
import {routes} from '.'
import Route from "./Route"

const AppRouter=()=>{
    return <BrowserRouter>
    <Routes>
        {routes.map((route)=><Route {...route}/>)}
    </Routes>
    </BrowserRouter>
}

export default AppRouter