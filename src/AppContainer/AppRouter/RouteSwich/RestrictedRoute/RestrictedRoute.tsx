import { RootState } from "app"
import {RoutesEnum } from "AppContainer/AppRouter"

import type { FC, ReactElement } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export type RestrictedRouteProps={children:ReactElement}



const RestrictedRoute:FC<RestrictedRouteProps>=({children})=>{
    const isLogedIn=useSelector((state:RootState)=>state.user.isLogedIn)

    if(isLogedIn){
        return<Navigate to={RoutesEnum.MAIN}/>
    }
    return children
}

export default RestrictedRoute