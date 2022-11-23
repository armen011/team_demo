import { FC } from "react"
import type { RouteType } from "../index"
import {PrivateRoute,RestrictedRoute} from "."

export type RouteSwichProps=Omit<RouteType,'path'>



const RouteSwich:FC<RouteSwichProps>=({Component,type})=>{
    return type==='private'? (<PrivateRoute >
        <Component/>
    </PrivateRoute>):(<RestrictedRoute >
        <Component/>
    </RestrictedRoute>)
}

export default RouteSwich