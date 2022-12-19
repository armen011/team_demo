import {FC, ReactElement, ReactNode} from "react"
import MenuBar from 'components/MenuBar'

export type MainLayoutProps={
    children:ReactElement | ReactNode,
}

const MainLayout:FC<MainLayoutProps>=({children})=>{
    return <div>
                <MenuBar/>
                <div className='main_layout_wrapper'>{children}</div>
            </div>
}

export default MainLayout