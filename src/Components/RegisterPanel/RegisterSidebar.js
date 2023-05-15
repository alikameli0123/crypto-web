import Image from "next/image";
import React, { useState } from "react";
import style from "./RegisterSidebar.module.css";
import { useRouter } from 'next/router';

const RegisterSidebar = () => {
    const router = useRouter();
    return (
        <div className={` ${style.sidebar}`}>
            <div className={`d-flex flex-column text-center justify-content-center align-items-center`}>
                <div className={style.logo}>
                    <Image src='/assets/logo.svg' width={51} height={43} alt='logo' />
                </div>
                <p className={style.sidebar_title}>Register</p>
            </div>
            <ul className={style.sidebarSteps}>
                <li className={`${style.sidebar_user_information} ${router.asPath.includes('personal-information') && style.active}`} > <div className={style.circle}></div> <p>personal information</p>  </li>
                <div className={style.line}></div>
                <li className={`${style.sidebar_user_information} ${router.asPath.includes('connection-information') && style.active}`} > <div className={style.circle}></div> <p>connection information</p>  </li>
                <div className={style.line}></div>
                <li className={`${style.sidebar_user_information} ${router.asPath.includes('place-information') && style.active}`} > <div className={style.circle}></div> <p>place information</p>  </li>
            </ul>
        </div>
    )
}

export default RegisterSidebar;