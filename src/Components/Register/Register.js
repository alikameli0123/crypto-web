import Link from 'next/link';
import React, { useEffect } from 'react';
import style from "./Register.module.css";

const Register = ({ children, stepNumber,prev_link, next_link, getDetail, checkFill }) => {
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
                {/* Todo put the arrow icon from font-awesome */}
                    مرحله بعد
            </button>
                </Link>
                {
                    stepNumber != 1 &&
                    <Link href={`/register/${prev_link}`} className={style.prevLink}>
                     مرحله قبل
                    </Link>
                }
        </div>
    )
};

export default Register;