import React from "react";
import s from './Portfolio.module.scss'
import {PortfolioItem} from "./PortfolioItem";
import calc from '../../images/projects/calc.png'
import weather from '../../images/projects/weather.jpg'
import social from '../../images/projects/social.jpg'
import todo from '../../images/projects/todo.png'
import portfolio from '../../images/projects/portfolio.jpg'
import keyboard from '../../images/projects/keyboard.jpg'


const PortfolioItemsArray = [
    {
        id: 1,
        title: 'CALCULATOR',
        technology: '',
        description: '',
        link: 'https://kachanovski.github.io/calculator',
        img: calc
    },
    {id: 2, title: 'TODO LIST', technology: '', description: '', link: '', img: todo},
    {id: 3, title: 'SOCIAL NETWORK', technology: '', description: '', link: '', img: social},
    {
        id: 4,
        title: 'WEATHER',
        technology: '',
        description: '',
        link: 'https://kachanovski.github.io/weather-project/',
        img: weather
    },
    {id: 5, title: 'PORTFOLIO', technology: '', description: '', link: '', img: portfolio},
    {
        id: 6,
        title: 'KEYBOARD TRAINER',
        technology: '',
        description: '',
        link: 'https://kachanovski.github.io/keyboard-train',
        img: keyboard
    },
]


export const Portfolio = () => {
    return (
        <div id={'portfolio'} className={s.portfolio}>
            <div className={s.container}>
                <div className={s.title}>
                    <div className={s.title_large}>
                        My Finished Work
                    </div>
                    <div className={s.title_small}>
                        here is a selection of my pet-projects
                    </div>
                </div>
                <div className={s.portfolio_table}>
                    {PortfolioItemsArray.map(i => <PortfolioItem key={i.id}
                                                                 title={i.title}
                                                                 technology={i.technology}
                                                                 link={i.link}
                                                                 img={i.img}
                                                                 description={i.description}/>)}
                </div>
            </div>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" className={s.svg}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>
        </div>
    )
}