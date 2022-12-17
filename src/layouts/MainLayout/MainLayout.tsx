import {FC, ReactElement, ReactNode,useState} from "react"
import MenuBar from 'components/MenuBar';

export type MainLayoutProps={
    children:ReactElement | ReactNode
}

const MainLayout:FC<MainLayoutProps>=({children})=>{
    return <div>
                <MenuBar routeInfo={'Home'}/>
                <div className='main_layout_wrapper'>{children}</div>
            </div>
}

export default MainLayout