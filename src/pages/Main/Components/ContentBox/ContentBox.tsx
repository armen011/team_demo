import React , {FC} from "react"
import { useTranslation } from "react-i18next"
import "./ContentBox.css"


const ContentBox:FC =()=>{

    const {t} = useTranslation()
    return (

        <div className="content_container">
            <div className="likes">
                <span className="aa">100 {t("likes")}</span>
            </div>
            <div className="conetent">
                <div className="post_title">
                    <span className="aa">UserName</span><span className="content_text"></span>  
                </div>
            </div>
        </div>
    )
}


export default ContentBox