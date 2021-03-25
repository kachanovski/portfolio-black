import React from "react";
import {Link} from "react-scroll";
import s from './Menu.module.scss'
import home from '../../images/menu/home.jpg'
import about from '../../images/menu/about.jpg'
import service from '../../images/menu/service.jpg'
import portfolio from '../../images/menu/portfolio.jpg'
import contacts from '../../images/menu/contacts.jpg'

type MenuPropsType = {
    setIsShow: (isShow: boolean) => void
}

export const Menu = (props: MenuPropsType) => {
    return (
        <div onClick={() => props.setIsShow(false)} className={s.menu}>
            <div className={s.container}>
                <div className={s.menu_list}>
                    <button className={s.burger_close_button} onClick={() => props.setIsShow(false)}>x</button>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            <img className={s.menuItem_image} src={home} alt={''} />
                            <Link className={s.menuItem_link} onClick={() => props.setIsShow(false)}
                                  to="home" spy={true} smooth={true}
                                  duration={500}>HOME</Link>
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            <img className={s.menuItem_image} src={about} alt={''} />
                            <Link className={s.menuItem_link} onClick={() => props.setIsShow(false)}
                                  to="about" spy={true} smooth={true}
                                  duration={500}>ABOUT</Link>
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            <img className={s.menuItem_image} src={service} alt={''}  />
                            <Link className={s.menuItem_link} onClick={() => props.setIsShow(false)}
                                  to="service" spy={true} smooth={true}
                                  duration={500}>SERVICE</Link>
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            <img className={s.menuItem_image} src={portfolio} alt={''} />
                            <Link className={s.menuItem_link} onClick={() => props.setIsShow(false)}
                                  to="portfolio" spy={true} smooth={true}
                                  duration={500}>PORTFOLIO</Link>
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            <img className={s.menuItem_image} src={contacts} alt={''} />
                            <Link className={s.menuItem_link} onClick={() => props.setIsShow(false)}
                                  to="contacts" spy={true} smooth={true}
                                  duration={500}>CONTACTS</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}