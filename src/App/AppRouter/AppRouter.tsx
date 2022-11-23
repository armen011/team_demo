import { BrowserRouter,Routes,Route} from "react-router-dom"
import {routes} from '.'
import RouteSwich from "./RouteSwich"

const AppRouter=()=>{
    return <BrowserRouter>
    <Routes>
        {routes.map(({path,...otherProps},index)=><Route key={index} path={path} element={<RouteSwich {...otherProps}/>}/>)}
    </Routes>
    </BrowserRouter>
}

export default AppRouter