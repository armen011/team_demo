import { RootState } from "app"
import { RoutesEnum } from "AppContainer/AppRouter"
import { FC, ReactElement } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export type PrivateRouteProps={children:ReactElement}

const PrivateRoute:FC<PrivateRouteProps>=({children})=>{
    const isLogedIn=useSelector((state:RootState)=>state.user.isLogedIn)

    if(!isLogedIn){
        return <Navigate to={RoutesEnum.LOGIN}/>
    }

    return children
}

export default PrivateRoute