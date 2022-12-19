import React , {FC} from "react"
import { useTranslation } from "react-i18next"
import handleCutText from "utils/cutText"
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
                    <span className="aa">UserName</span><span className="content_text"> {handleCutText("mt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}</span> {false&&<span className="more">{t("more")}</span>}  
                </div>
            </div>
            <div className="view_all">{t("View all")} {65} {t("comments")}</div>
        </div>
    )
}


export default ContentBox