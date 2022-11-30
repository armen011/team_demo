import { FC, ReactElement } from "react"
import MenuBar from 'components/MenuBar'

export type MainLayoutProps={
    children:ReactElement;
    routeInfo: string
}

const MainLayout:FC<MainLayoutProps>=({children, routeInfo})=>{
    return<>
        <MenuBar routeInfo={routeInfo}/>
        <div>
            <div>{children}</div>
        </div>
    </>

}

export default MainLayout