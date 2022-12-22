import {FC, ReactElement, ReactNode , useEffect} from "react"
import { useAppDispatch , useAppSelector } from "app"
import "./MainLayout.css"
import MenuBar from 'components/MenuBar'
import { getPosts } from "features/getPost"

export type MainLayoutProps={
    children:ReactElement | ReactNode
}

const MainLayout:FC<MainLayoutProps>=({children})=>{
    const st = useAppSelector(s=>s.getPosts)
        
    return <div>
                <MenuBar routeInfo={'Home'}/>
                <div className='main_layout_wrapper'>{children}</div>
            </div>
}

export default MainLayout