import Image from 'next/image';
import Link from 'next/link';
import style from './Login.module.css';
import React, { useState } from 'react';
import Server from './../../Api/Server';
import Router from 'next/router';
import Cookie from './../../Api/Cookie';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        // for login can use:
        // email : a001@gmail.com
        // password: 123456
        Server.login(email, password).then(response => {
            if (response.data.status === 200) {
                Cookie.setCookie('token', response.data.token, 4)
                Router.push('/dashboard/panel')
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className={`${style.login_container} container-fluid`}>
            <div className={`row`}>
                {/* Text right Bar */}
                <div className={`col-12 col-md-6 ${style.text_bar}`}>
                    <h1 className={style.text}>Torbo-crypto digital currency exchange</h1>
                    <h5 className={style.sub_text}>
                        Safe buying and selling of Bitcoin and digital currencies Join the largest digital currency market
                    </h5>
                    <div className={style.login_image}>
                        <Image src='/assets/login/loginlogo.svg' width={178} height={318.5} alt='login' />
                    </div>
                </div>
                {/* Login Form  */}
                <div className={`col-12 col-md-6 ${style.login_form}`}>
                    <div className={style.logo}>
                        <Image src='/assets/logo.svg' width={36} height={32} alt='logo' />
                    </div>
                    <div className={style.form_title}>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <form>
                            {/* Email */}
                            <div className={style.input_container}>
                                <div className={style.label_parrent}>
                                    <label className={style.label} for='#email'> Email</label>
                                </div>
                                <div className={style.input_parrent}>
                                    <input className={style.input} type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='example@mail.com' />
                                    <span className={style.icon}>
                                        <Image src='/assets/register/message.png' width={20} height={20} alt='email' />
                                    </span>
                                </div>
                            </div>
                            {/* Password */}
                            <div className={style.input_container}>
                                <div className={style.label_parrent}>
                                    <label className={style.label} for='#password'>Password</label>
                                </div>
                                <div className={style.input_parrent}>
                                    <input className={style.input} type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
                                    <span className={style.icon}>
                                        <Image src='/assets/register/lock.png' width={20} height={20} alt='password' />
                                    </span>
                                </div>
                            </div>
                        <Link href='/register/personal-information'>Registred now</Link>
                        </form>
                    </div>
                    <button className={style.loginBtn} onClick={loginHandler}>Login</button>
                </div>

            </div>
        </div>
    )
};

export default Login;