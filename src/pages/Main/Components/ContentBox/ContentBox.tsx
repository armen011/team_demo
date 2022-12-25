import { T_doc } from "pages/Main/PostComponent/PostComponent"
import {FC, useState} from "react"
import { useTranslation } from "react-i18next"
import handleCutText from "utils/cutText"
import "./ContentBox.css"


const ContentBox:FC<{doc:T_doc, likesLength?: number}> =({doc,likesLength})=>{

    const {desc} = doc;
    const [fullText,setFullText] = useState(false)

    const changeTextLength = ()=>{
        setFullText(true)
    }


    const {t} = useTranslation()
    return (

        <div className="content_container">
            <div className="likes">
                <span className="aa">{ likesLength && (likesLength > 0 ? likesLength : 0)} {t("likes")}</span>
            </div>
            <div className="conetent">
                <div className="post_title">
                    <span className="aa">UserName</span><span className="content_text"> {desc.length>100 && !fullText?handleCutText(desc):desc}</span> {desc.length >100 && !fullText  &&<span onClick={changeTextLength} className="more">{t("more")}</span>}
                </div>
            </div>

        </div>
    )
}


export default ContentBox