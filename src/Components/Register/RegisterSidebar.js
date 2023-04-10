import Image from "next/image";
import React, { useState } from "react";
import style from "./RegisterSidebar.module.css";

const RegisterSidebar = () => {
    const [active,setActive] = useState(false);
    return (
        <div className={` ${style.sidebar}`}>
            <div className={`d-flex flex-column text-center justify-content-center`}>
                <div className={style.logo}>
                    <Image src='/assets/logo.png' width={101} height={94} alt='logo' />
                </div>
                <h2 className={style.sidebar_title}>ثبت نام</h2>
            </div>
            <ul className={style.sidebarSteps}>
                <li className={style.sidebar_user_information}> <p>اطلاعات فردی</p> <div className={style.circle}></div> </li>
                <div className={style.line}></div>
                <li className={style.sidebar_user_information}> <p>اطلاعات ارتباطی</p> <div className={style.circle}></div> </li>
                <div className={style.line}></div>
                <li className={style.sidebar_user_information}> <p>اطلاعات مکانی</p> <div className={style.circle}></div> </li>
            </ul>
        </div>
    )
}

export default RegisterSidebar;