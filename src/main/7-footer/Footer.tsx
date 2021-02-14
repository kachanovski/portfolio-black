import React from "react";
import s from './Footer.module.scss'
import telegram from '../../images/icons/social/telegram-512.png'
import github from '../../images/icons/social/github-11-512.png'
import linkIn from '../../images/icons/social/linkedin-6-512.png'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.footer_title}>
                    Development by Alexander Kachanovski | 2021
                </div>
                <div className={s.socialLink}>
                    <div className={s.socialIcon}>
                        <a href={'https://t.me/shura_13'}>
                            <img className={s.icon} alt={'soc icon'} src={telegram}/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href={'https://github.com/kachanovski'}>
                            <img className={s.icon} alt={'soc icon'} src={github}/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href={'https://www.linkedin.com/in/aliaksandr-kachnovski/'}>
                            <img className={s.icon} alt={'soc icon'} src={linkIn}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}