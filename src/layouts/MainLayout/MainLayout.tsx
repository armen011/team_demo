import {Component, FC, ReactChildren, ReactComponentElement, ReactElement, ReactNode} from "react"
import MenuBar from 'components/MenuBar'

export type MainLayoutProps={
    children:ReactElement | ReactNode
}

const MainLayout:FC<MainLayoutProps>=({children})=>{
    return <div>
                <MenuBar routeInfo={'Home'}/>
                <div>{children}</div>
            </div>
}

export default MainLayout