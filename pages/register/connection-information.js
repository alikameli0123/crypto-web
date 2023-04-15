import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Register from '@/src/Components/Register/Register';
import style from "../../styles/connection_information.module.css";
import Countdown from "react-countdown";

const ConnectionInformationPage = () => {

  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fill, setFill] = useState(false);
  const [sendCode, setSendCode] = useState(false);

  const firstTxt = useRef();
  const secTxt = useRef();
  const threeTxt = useRef();
  const fourTxt = useRef();

  useEffect(() => {
    if (number.length > 0 && email.length > 0) {
      setFill(true);
    } else {
    }
  }, [number, email])

  const nextStep = () => { 
    const userInfo=[number,email]
    localStorage.setItem('connection',JSON.stringify(userInfo))
  }

  const sendCodeHandler = () => {
    if (number.length === 10) {
      setSendCode(true);
    }
  }

  const verifyPhoneNumber = (e) => {
    e.preventDefault();
    const firstValue = firstTxt.current.value;
    const secValue = secTxt.current.value;
    const threeValue = threeTxt.current.value;
    const fourValue = fourTxt.current.value;
  }
  // for focus on verify input code
  const handleFocus = (e) => {
    if (e.target.nextSibling) e.target.nextSibling.focus();
  }

  return (
    <>
      <Head>
        <title>personal Information</title>
      </Head>
      <Register stepNumber='2' next_link='register/place-information' email={email} number={number} prev_link='personal-information' nextStep={nextStep} checkFill={fill} >
        <form method='POST'>
          {/* Phone number */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#number'> شماره همراه</label>
            </div>
            <div className={style.input_parrent}>
              <span className={style.sendCode} onClick={sendCodeHandler}>ارسال کد</span>
              <input className={style.input} maxLength='11' onChange={(e) => { setNumber(e.target.value) }} id='number' placeholder='9112564798' />
              <span className={style.icon}>
                <Image src='/assets/register/mobile.png' width={20} height={20} alt='number' />
              </span>
            </div>
          </div>
          {/* Send Code */}
          {
            sendCode &&
            <div className={style.sendCodeParrent}>
              <div className={style.sendCodeDetail}>
                <p>کد تائید به شماره {number} ارسال شده است. این کد تا
                  <Countdown date={Date.now() + 120000} daysInHours={true} />
                  دقیقه دیگر معتبر است</p>
                <Image src='/assets/register/clipboardtick.png' width={20} height={20} alt='clipboardtick' />
              </div>
              <div className={style.confirmVerify}>
                <p>کد تائید</p>
                <div className={style.verifyCode}>
                  <input onChange={handleFocus} ref={firstTxt} type="text" maxLength="1" autoFocus={true} />
                  <input onChange={handleFocus} ref={secTxt} type="text" maxLength="1" />
                  <input onChange={handleFocus} ref={threeTxt} type="text" maxLength="1" />
                  <input onChange={handleFocus} ref={fourTxt} type="text" maxLength="1" />
                </div>
                <button className={style.confirmNumberBtn} onClick={verifyPhoneNumber}>تائید شماره همراه</button>
              </div>
            </div>
          }
          {/* Email */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#email'> ایمیل </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} type='email' onChange={(e) => { setEmail(e.target.value) }} id='email' placeholder='example@mail.com' />
              <span className={style.icon}>
                <Image src='/assets/register/message.png' width={20} height={20} alt='email' />
              </span>
            </div>
          </div>
        </form>
      </Register>
    </>
  )
}

export default ConnectionInformationPage;