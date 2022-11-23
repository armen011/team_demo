import { FC } from "react"
import Main from 'pages/Main'
import Login from "pages/Login"
import Registration from "pages/Registration"

export enum Routes {
    MAIN='/',
    LOGIN='/login',
    REGISTRATION='/registration',
}

export type RouteType={
    path:Routes,
    Component:FC
    type:"public" |'private' |'restricted'

}

export const routes:RouteType[]=[
    {
        path:Routes.MAIN,
        type:"private",
        Component:Main
    },
    {
        path:Routes.LOGIN,
        type:"restricted",
        Component:Login
    },
    {
        path:Routes.REGISTRATION,
        type:"restricted",
        Component:Registration
    },
]