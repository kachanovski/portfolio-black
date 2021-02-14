import React, { useState } from "react";
import s from './Header.module.scss'
import {Menu} from "../0-Menu/Menu";
import logo from './../../images/logo.png'

export const Header = () => {


    const [isShow,setIsShow] = useState<boolean>(false)

    return (
        <div  className={s.header}>
            {isShow && <Menu setIsShow={setIsShow}/>}
            <div  className={s.container}>
                <div className={s.header_logo}>
                    <img className={s.logo} src={logo} alt={'logo'}/>
                </div>
                <div className={s.header_menu}>
                   <div className={s.burger_container}>
                       <div onClick={() => setIsShow(!isShow)} className={s.burger}>

                           <span className={s.burger_row}/>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}