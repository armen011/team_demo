import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import {routes} from '.'
import RouteSwich from "./RouteSwich"
import {RoutesEnum} from '.'

const AppRouter=()=>{
    return <BrowserRouter>
    <Routes>
        {routes.map(({path,...otherProps},index)=><Route key={index} path={path} element={<RouteSwich {...otherProps}/>}/>)}
        <Route path='*' element={<Navigate to={RoutesEnum.ERROR}/>}/>
    </Routes>
    </BrowserRouter>
}

export default AppRouter