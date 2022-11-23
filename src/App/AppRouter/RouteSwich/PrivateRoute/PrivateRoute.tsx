import { Routes } from "App/AppRouter"
import { FC, ReactElement } from "react"
import { Navigate } from "react-router-dom"
const isAuthenticated=true

export type PrivateRouteProps={children:ReactElement}

const PrivateRoute:FC<PrivateRouteProps>=({children})=>{

    if(!isAuthenticated){
        return <Navigate to={Routes.LOGIN}/>
    }

    return children
}

export default PrivateRoute