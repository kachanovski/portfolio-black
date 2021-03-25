import React from "react";
import s from './Home.module.scss'
import face from './../../images/my_face.png'
import telegram from '../../images/icons/social/telegram-512.png'
import github from '../../images/icons/social/github-11-512.png'
import linkIn from '../../images/icons/social/linkedin-6-512.png'
import {Link} from "react-scroll";

export const Home = () => {
    return (
        <div className={s.home}>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" className={s.svgUp}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>
            <div className={s.container}>

                <div className={s.textWrapper}>
                    <div className={s.textWrapper_name}>I AM ALEXANDER KACHANOVSKI</div>
                    <div className={s.textWrap_specialty}>FRONTEND REACT DEVELOPER</div>
                    <Link className={s.button} to="contacts" spy={true} smooth={true}
                          duration={500}>CONTACT ME</Link>
                </div>
                <div className={s.slideImage}>
                    <img className={s.dropLeft} src={face} alt={'my_face'}/>
                </div>
                <div className={s.socialLink}>
                    <div className={s.socialIcon}>
                        <a href={'https://t.me/kachanovski_03'}>
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

            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" className={s.svg}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>

        </div>
    )
}