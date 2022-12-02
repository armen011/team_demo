import {FC, ReactElement} from "react"
import MenuBar from 'components/MenuBar'
import "./MainLayout.css";


export type MainLayoutProps = {
    children: ReactElement;
    routeInfo: string
}

const MainLayout: FC<MainLayoutProps> = ({children, routeInfo}) => {
    return <>
        <MenuBar routeInfo={routeInfo}/>
        <div className="right_side">
            {children}
        </div>
    </>

}

export default MainLayout