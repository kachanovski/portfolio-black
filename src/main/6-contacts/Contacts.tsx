import React from "react";
import s from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <div className={s.contacts_wrap}>
                    <div className={s.myContacts}>
                        <div className={s.contact_title}>MY CONTACTS</div>
                        <div className={s.contact_subTitle}>
                            Are you working on something great? I would love to help make it happen! Drop me a letter
                            and start your project right now! Just do it.
                        </div>
                        <div className={s.address_title}>
                            ADDRESS
                        </div>
                        <div className={s.address_subTitle}>
                            Belarus, Minsk
                        </div>
                        <div className={s.address_title}>
                            PHONE
                        </div>
                        <div className={s.address_subTitle}>
                            +375 (44) 54-22-045
                        </div>
                        <div className={s.address_title}>
                            EMAIL
                        </div>
                        <div className={s.address_subTitle}>
                            kachanovski03@gmail.com
                        </div>
                    </div>
                    <div className={s.submitForm}>
                        <div className={s.contact_title}>
                            EASY WAY TO CONTACT ME
                        </div>

                        <form className={s.form}>
                            <input className={s.form_input} placeholder={'your name'}/>
                            <input className={s.form_input} placeholder={'your last name'}/>
                            <input className={s.form_input} placeholder={'your email'}/>
                            <input className={s.form_input} placeholder={'subject'}/>
                            <textarea className={s.form_textarea} placeholder={'enter you message'}/>
                            <button className={s.button}>SUBMIT</button>
                        </form>
                    </div>
                </div>

                <div className={s.map}>
                    <div className={s.map_wrap}>
                        <iframe src="https://www.google.ru/maps/d/embed?mid=1rqgun1QICFrckcxuUHEMmnsLGhNuZkN3"
                                title={'map'}
                                width="100%"
                                height="100%"/>
                    </div>
                </div>

            </div>

            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" className={s.svg}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
            </svg>
        </div>
    )
}