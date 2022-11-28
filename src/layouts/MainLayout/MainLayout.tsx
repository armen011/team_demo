import { FC, ReactElement } from "react"

import MenuBar from '../../components/MenuBar'

export type MainLayoutProps={
    children:ReactElement
}

const MainLayout:FC<MainLayoutProps>=({children})=>{
    return <div>
        <MenuBar/>
        {/*<div>{children}</div>*/}
        </div>
}

export default MainLayout