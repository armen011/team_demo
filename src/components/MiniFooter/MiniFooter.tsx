import './MiniFooter.css'
import {useTranslation} from "react-i18next";
import {Dispatch, FC, SetStateAction} from "react";

type TMiniFooterProps = {
    language: boolean,
    setLanguage: Dispatch<SetStateAction<boolean>>
}

const MiniFooter:FC<TMiniFooterProps> = ({language, setLanguage}) => {
    const {t, i18n} = useTranslation()


    return (
        <div className='mini_footer_wrapper'>
            <div className='mini_footer_wrapper'>
                <span className='mini_footer_text'>{t('About')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('Help')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('Press')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('API')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('Jobs')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('Privacy')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('Terms')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text'>{t('Location')}</span>
                <div className='dot'></div>
                <span className='mini_footer_text' onClick={() => {
                    setLanguage(!language)
                    return i18n.changeLanguage(language ? 'en' : 'hy')
                }}>{!language ? 'Հայերեն' : 'English'}</span>
            </div>
            <span className='mini_footer_text_logo'>{t('© 2022 INSTAGRAM FROM HONEY')}</span>
        </div>
    )
}
export default MiniFooter;