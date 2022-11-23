import { FC } from "react"
import Main from 'pages/Main'
import Login from "pages/Login"
import Registration from "pages/Registration"
import Error from "pages/Error"

export enum RoutesEnum {
    MAIN='/',
    LOGIN='/login',
    REGISTRATION='/registration',
    ERROR='error_page'
}

export type RouteType={
    path:RoutesEnum,
    Component:FC
    type:"public" |'private' |'restricted'

}

export const routes:RouteType[]=[
    {
        path:RoutesEnum.MAIN,
        type:"private",
        Component:Main
    },
    {
        path:RoutesEnum.LOGIN,
        type:"restricted",
        Component:Login
    },
    {
        path:RoutesEnum.REGISTRATION,
        type:"restricted",
        Component:Registration
    },
    {
        path:RoutesEnum.ERROR,
        type:"private",
        Component:Error
    }
]