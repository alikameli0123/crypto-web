import Image from "next/image";
import React, { useState } from "react";
import style from "./RegisterSidebar.module.css";
import { useRouter } from 'next/router';

const RegisterSidebar = () => {
    const router = useRouter();
    return (
        <div className={` ${style.sidebar}`}>
            <div className={`d-flex flex-column text-center justify-content-center`}>
                <div className={style.logo}>
                    <Image src='/assets/logo.png' width={101} height={94} alt='logo' />
                </div>
                <h2 className={style.sidebar_title}>ثبت نام</h2>
            </div>
            <ul className={style.sidebarSteps}>
                <li className={`${style.sidebar_user_information} ${router.asPath.includes('personal-information') && style.active}`} > <p>اطلاعات فردی</p> <div className={style.circle}></div> </li>
                <div className={style.line}></div>
                <li className={`${style.sidebar_user_information} ${router.asPath.includes('connection-information') && style.active}`} > <p>اطلاعات ارتباطی</p> <div className={style.circle}></div> </li>
                <div className={style.line}></div>
                <li className={`${style.sidebar_user_information} ${router.asPath.includes('place-information') && style.active}`} > <p>اطلاعات مکانی</p> <div className={style.circle}></div> </li>
            </ul>
        </div>
    )
}

export default RegisterSidebar;