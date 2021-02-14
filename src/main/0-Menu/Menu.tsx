import React from "react";
import s from './Menu.module.scss'

type MenuPropsType = {
    setIsShow: (isShow:boolean)=> void
}

export const Menu = (props: MenuPropsType) => {
    return (
        <div onClick={() => props.setIsShow(false)} className={s.menu}>
            <div className={s.container}>
                <div className={s.menu_list}>
                    <button className={s.burger_close_button} onClick={() => props.setIsShow(false)}>x</button>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                           HOME
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                           ABOUT
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            SERVICE
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                           PORTFOLIO
                        </div>

                    </div>
                    <div className={s.nav_page}>
                        <div className={s.page_name}>
                            CONTACTS
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}