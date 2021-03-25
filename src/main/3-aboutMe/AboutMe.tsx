import React from "react";
import s from './About.module.scss'
import photo_about from './../../images/phptp_about.jpg'
//@ts-ignore
import cv from '../../accets/kachanovski_cv_react.pdf'

export const About = () => {
    return (
        <div id={'about'} className={s.about}>
            <div className={s.container}>

                <div className={s.photo_wrap}>
                    <img className={s.photo} alt={'photo_about'} src={photo_about}/>
                </div>
                <div className={s.about_text}>
                    <div className={s.about_title}>About Me</div>
                    <div className={s.text_container}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                        debitis fugit magni minima
                        perferendis. Animi, harum, molestias. Aperiam asperiores consequatur, distinctio eaque earum
                        itaque laborum necessitatibus quam quis, reiciendis repellendus.
                    </div>
                    <div className={s.text_container}>Ad commodi, deleniti deserunt distinctio dolorem earum id, nam
                        officia perspiciatis quasi quod
                        repudiandae saepe unde voluptate voluptatibus? Adipisci consectetur culpa dolor dolorem,
                        excepturi maxime nemo officiis omnis reprehenderit repudiandae?
                    </div>
                    <a href={cv} download className={s.button}>DOWNLOAD CV</a>
                </div>
            </div>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" className={s.svg}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>
        </div>
    )
}