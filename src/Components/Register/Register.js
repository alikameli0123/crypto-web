import Link from 'next/link';
import React from 'react';
import style from "./Register.module.css";
import { useState } from 'react';

const Register = ({ children, stepNumber, next_link }) => {
    return (
        <div className={`text-center ${style.registerFormParrent}`}>
            <h5 className={style.stepNumber}>  مرحله {stepNumber} از 3</h5>
            <h3 className={style.fill_text}>لطفا اطلاعات خود را با دقت وارد نمائید</h3>
            <div>
                {children}
            </div>
            <div className={style.endLine} ></div>
            <Link href={`/register/${next_link}`}>
                <button className={` ${style.nextBtn}`}>
                    مرحله بعد
                </button>
            </Link>
        </div>
    )
};

export default Register;