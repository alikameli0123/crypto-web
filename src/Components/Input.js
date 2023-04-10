import Image from "next/image";
import React from "react";
import style from './Input.module.css';

const Input = ({ icon, id, label, placeholder }) => {
    return (
        <div className={style.input_container}>
            <div className={style.label_parrent}>
                <label className={style.label} for={`#${id}`}> {label} </label>
            </div>
            <div className={style.input_parrent}>
                <input className={style.input} id={id} placeholder={placeholder} />
                <span className={style.icon}>
                    <Image src={icon} width={20} height={20} alt={id} />
                </span>
            </div>
        </div>
    )
}

export default Input;