import { FC, ReactElement } from "react"

export type MainLayoutProps={
    children:ReactElement
}

const MainLayout:FC<MainLayoutProps>=({children})=>{
    return <div>
        <div>menubar</div>
        <div>{children}</div>
        </div>
}

export default MainLayout