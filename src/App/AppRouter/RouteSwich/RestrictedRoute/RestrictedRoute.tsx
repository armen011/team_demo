import {RoutesEnum } from "App/AppRouter"

import type { FC, ReactElement } from "react"
import { Navigate } from "react-router-dom"

export type RestrictedRouteProps={children:ReactElement}

const isAuthenticated=false


const RestrictedRoute:FC<RestrictedRouteProps>=({children})=>{
    if(isAuthenticated){
        return<Navigate to={RoutesEnum.MAIN}/>
    }
    return children
}

export default RestrictedRoute