import React from "react";
import s from './MyService.module.scss'
import {MyServiceItem} from "./MyServiceItem";
import html from '../../images/icons/service/html.png'
import redux from '../../images/icons/service/redux.png'
import adaptive from '../../images/icons/service/adaptive.png'
import js from '../../images/icons/service/js.png'
import git from '../../images/icons/service/git.png'
import react from '../../images/icons/service/react.png'

const ServiceArray = [
    {
        id: 1,
        title: 'HTML/CSS',
        description: 'HTML and CSS are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the layout, for a variety of devices.',
        img: html
    },
    {
        id: 2,
        title: 'JAVASCRIPT',
        description: 'JS is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it\'s used in many non-browser environments as well.',
        img: js
    },
    {
        id: 3,
        title: 'React',
        description: 'Build fast, responsive private collection web apps using React, a JavaScript library for building user interfaces.',
        img:react
    },
    {
        id: 4,
        title: 'Redux',
        description: 'Redux is a pattern and library for managing and updating application state, using events called "actions".',
        img: redux
    },
    {
        id: 5,
        title: 'GIT',
        description: 'Git is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development.',
        img: git
    },
    {
        id: 6,
        title: 'ADAPTIVE DESIGN',
        description: 'Responsive layout changes page design based on user behavior, platform, screen size and device orientation and is an integral part of modern web development.',
        img: adaptive
    },
]

export const Service = () => {

    return (
        <div className={s.service}>
            <div className={s.container}>
                <div className={s.title}>
                    <div className={s.title_smallText}>
                        what can I do
                    </div>
                    <div className={s.title_largeText}>
                        MY SERVICE
                    </div>
                </div>

                <div className={s.items}>
                    {ServiceArray.map(i => <MyServiceItem key={i.id} img={i.img} title={i.title} description={i.description}/>)}
                </div>
            </div>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" className={s.svg}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>
        </div>
    )
}

