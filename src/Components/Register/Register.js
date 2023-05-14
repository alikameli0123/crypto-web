import Link from 'next/link';
import React, { useEffect } from 'react';
import style from "./Register.module.css";
import { useRouter } from 'next/router';

const Register = ({ children, stepNumber, prev_link, next_link, nextStep, registerHandler }) => {
    const router = useRouter();
    return (
        <div className={`text-center ${style.registerFormParrent}`}>
            <h5 className={style.stepNumber}>  Step {stepNumber} of 3</h5>
            <h3 className={style.fill_text}>Please enter your information carefully</h3>
            <div className={style.children_container}>
                {children}
            </div>
            <div className={style.endLine} ></div>
            {
                router.asPath.includes('register/place-information') ?
                    <button className={style.activeBtn} onClick={registerHandler} >
                        {/* Todo put the arrow icon from font-awesome */}
                        Register                        </button>
                    :
                    <button className={style.activeBtn} onClick={nextStep} >
                        Next step
                    </button>
            }
            {
                stepNumber != 1 &&
                <Link href={`/register/${prev_link}`} className={style.prevLink}>
                    Prev step                </Link>
            }
        </div>
    )
};

export default Register;