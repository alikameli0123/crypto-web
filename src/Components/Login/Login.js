import Image from 'next/image';
import Link from 'next/link';
import style from './Login.module.css';
import React, { useState } from 'react';
import Server from './../../Api/Server';
import Router from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler=()=>{
        Server.login(email,password).then(response=>{
            if(response.data.status === 200){
                Router.push('/dashboard')
            }
        }).catch(err=>console.log(err))
    }

    return (
        <div className={`${style.login_container} container-fluid`}>
            <div className={`row`}>
                {/* Login Form  */}
                <div className={`col-12 col-md-6 ${style.login_form}`}>
                    <div className={style.logo}>
                        <Image src='/assets/logo.svg' width={36} height={32} alt='logo' />
                    </div>
                    <div className={style.form_title}>
                        <h1>ورود به داشبورد</h1>
                        <Link href='/register/personal-information'>هنوز ثبت نام نکرده‌اید؟</Link>
                    </div>
                    <div>
                        <form>
                            {/* Email */}
                            <div className={style.input_container}>
                                <div className={style.label_parrent}>
                                    <label className={style.label} for='#email'> ایمیل</label>
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
                                    <label className={style.label} for='#password'> رمزعبور</label>
                                </div>
                                <div className={style.input_parrent}>
                                    <input className={style.input} type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='حداقل 6 کاراکتر' />
                                    <span className={style.icon}>
                                        <Image src='/assets/register/lock.png' width={20} height={20} alt='password' />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className={style.loginBtn} onClick={loginHandler}>ورود به حساب</button>
                </div>
                {/* Text right Bar */}
                <div className={`col-12 col-md-6 ${style.text_bar}`}>
                    <h1 className={style.text}>صرافی ارز دیجیتال نیوکوین اسپیس</h1>
                    <h5 className={style.sub_text}>خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
                        به بزرگترین بازار ارز دیجیتال ایران بپیوندید</h5>
                    <div className={style.login_image}>
                        <Image src='/assets/login/loginlogo.svg' width={178} height={318.5} alt='login' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;