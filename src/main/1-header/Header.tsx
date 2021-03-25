import React, { useState } from "react";
import s from './Header.module.scss'
import {Menu} from "../0-Menu/Menu";
import logo from './../../images/logo.png'
import {Link} from "react-scroll";

export const Header = () => {


    const [isShow,setIsShow] = useState<boolean>(false)

    return (
        <div id={'home'} className={s.header}>
            {isShow && <Menu setIsShow={setIsShow}/>}
            <div  className={s.container}>
                <div className={s.header_logo}>
                    <Link to="home" spy={true} smooth={true}
                          duration={500}><img className={s.logo} src={logo} alt={'logo'}/></Link>
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