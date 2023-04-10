import Link from 'next/link';
import React, { useEffect } from 'react';
import style from "./Register.module.css";

const Register = ({ children, stepNumber, next_link, getDetail, checkFill }) => {

    useEffect(() => {
        console.log(checkFill)
    })
    return (
        <div className={`text-center ${style.registerFormParrent}`}>
            <h5 className={style.stepNumber}>  مرحله {stepNumber} از 3</h5>
            <h3 className={style.fill_text}>لطفا اطلاعات خود را با دقت وارد نمائید</h3>
            <div className={style.children_container}>
                {children}
            </div>
            <div className={style.endLine} ></div>
                <Link href={`/register/${next_link}`} onClick={getDetail} >
            <button className={checkFill ? style.activeBtn : style.deactiveBtn} disabled={!checkFill}>
                    مرحله بعد
            </button>
                </Link>
        </div>
    )
};

export default Register;