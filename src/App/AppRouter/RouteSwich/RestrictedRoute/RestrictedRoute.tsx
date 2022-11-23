import {Routes } from "App/AppRouter"

import type { FC, ReactElement } from "react"
import { Navigate } from "react-router-dom"

export type RestrictedRouteProps={children:ReactElement}

const isAuthenticated=true


const RestrictedRoute:FC<RestrictedRouteProps>=({children})=>{
    if(isAuthenticated){
        return<Navigate to={Routes.MAIN}/>
    }
    return children
}

export default RestrictedRoute