import React, {useEffect, useState} from "react";
import s from './Contacts.module.scss'
import {Link} from "react-scroll";
import axios from "axios";

export const Contacts = () => {

    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {
    }, [])

    const sendMail = async () => {
        if (name === '' || email === '' || subject === '' || message === '' || lastName === '') {
            setError('All fields are required.')
        } else {
            await axios.post('https://portfolio-send-mail.herokuapp.com/send-mail',{name, lastName, email, subject, message} )
            setError('')
        }
    }

    return (
        <div id={'contacts'} className={s.contacts}>
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
                            <input value={name} onChange={(e) => setName(e.currentTarget.value)}
                                   className={s.form_input} placeholder={'your name'}/>
                            <input value={lastName} onChange={(e) => setLastName(e.currentTarget.value)}
                                   className={s.form_input} placeholder={'your last name'}/>
                            <input value={email} onChange={(e) => setEmail(e.currentTarget.value)}
                                   className={s.form_input} placeholder={'your email'}/>
                            <input value={subject} onChange={(e) => setSubject(e.currentTarget.value)}
                                   className={s.form_input} placeholder={'subject'}/>
                            <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}
                                      className={s.form_textarea} placeholder={'enter you message'}/>
                            <span className={s.error}>{error}</span>
                            <Link to="contacts" spy={true} smooth={true}
                                  duration={500}>
                                <button onClick={sendMail} type={'submit'} className={s.button}>SUBMIT</button>
                            </Link>

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