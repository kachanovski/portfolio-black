import React from "react";
import s from './PortfolioItem.module.scss'

type PortfolioItemPropsType = {
    title: string
    technology: string
    link: string
    img: string
    description: string
}

export const PortfolioItem = (props: PortfolioItemPropsType) => {
    return (
        <div className={s.portfolioItem}>
            <div className={s.container}>
                <div className={s.item}>
                    <img src={props.img} alt={'calc'} className={s.item_img}/>
                    <div className={s.item_info}>
                        <div className={s.item_title}>
                            {props.title}
                        </div>
                        <div className={s.item_technology}>
                            technology
                        </div>
                        <div className={s.item_description}>
                            {props.description}
                            des
                        </div>

                        <div className={s.button_wrap}>
                            <a href={props.link} className={s.button}>DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}