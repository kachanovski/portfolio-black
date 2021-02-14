import React from "react";
import s from './MyServiceItem.module.scss'

type MyServiceItemPropsType = {
    title: string
    description: string
    img: string
}

export const MyServiceItem = (props: MyServiceItemPropsType) => {
    return (
        <div className={s.myServiceItem}>
            <div className={s.container}>
                <div className={s.item_title}>
                    {props.title}
                </div>
                <div className={s.item_img}>
                    <img src={props.img} className={s.icon} alt={'service icon'}/>
                </div>
                <div className={s.item_description}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}