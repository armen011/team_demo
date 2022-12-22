import { T_doc } from "pages/Main/PostComponent/PostComponent"
import {FC, useState} from "react"
import { useTranslation } from "react-i18next"
import handleCutText from "utils/cutText"
import "./ContentBox.css"


const ContentBox:FC<{doc:T_doc}> =({doc:{desc , likes}})=>{

    const [fullText,setFullText] = useState(false)

    const changeTextLength = ()=>setFullText(true)
    const {t} = useTranslation()
    return (

        <div className="content_container">
            <div className="likes">
                <span className="aa">{likes.length} {t("likes")}</span>
            </div>
            <div className="conetent">
                <div className="post_title">
                    <span className="aa">UserName</span><span className="content_text"> {!fullText?handleCutText(desc):desc}</span> {desc.length >100 &&<span onClick={changeTextLength} className="more">{t("more")}</span>}  
                </div>
            </div>
            <div className="view_all">{t("View all")} {65} {t("comments")}</div>
        </div>
    )
}


export default ContentBox