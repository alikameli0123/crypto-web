import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Register from '@/src/Components/Register/Register';
import style from "../../styles/connection_information.module.css";
import Countdown from "react-countdown";
import Router from 'next/router';
import SimpleReactValidator from "simple-react-validator";

const ConnectionInformationPage = () => {
  const [email, setEmail] = useState('');
  const [sendCode, setSendCode] = useState(false);


  const firstTxt = useRef();
  const secTxt = useRef();
  const threeTxt = useRef();
  const fourTxt = useRef();

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Filling this field is mandatory",
        min: 'The field value must not be less than the sample value',
        email: "The email entered is not correct",
          },
      element: message => <div style={{ color: "red" }}>{message}</div>
    })
  );

  const nextStep = (e) => {
    e.preventDefault();
    try {
      if (validator.current.allValid()) {
        localStorage.setItem('connection', JSON.stringify(email));
        Router.push('/register/place-information');
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  const sendCodeHandler = () => {
    if (validator.current.allValid()) {

      setSendCode(true);
    }else {
      validator.current.showMessages();
      forceUpdate(1);
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
        <title>Connection Information</title>
      </Head>
      <Register stepNumber='2' next_link='register/place-information' prev_link='personal-information' nextStep={nextStep}>
        <form method='POST'>
          {/* Email */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#email'> Email</label>
            </div>
            <div className={style.input_parrent}>
              <span className={style.sendCode} onClick={sendCodeHandler}>verify</span>
              <input className={style.input} disabled={sendCode && true} type='email' name='email' onChange={(e) => { 
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
                }} id='email' placeholder='example@gmail.com' />
              <span className={style.icon}>
              <Image src='/assets/register/message.png' width={20} height={20} alt='email' />

              </span>
              {validator.current.message(
                "email",
                email,
                "required|email"
              )}
            </div>
          </div>
          {/* Send Code */}
          {
            sendCode &&
            <div className={style.sendCodeParrent}>
              <div className={style.sendCodeDetail}>
                <p>
                A verification code has been sent to {email}.
                <br/>
                This code is valid for <Countdown date={Date.now() + 120000} daysInHours={true} /> minutes
                  </p>
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
        </form>
      </Register>
    </>
  )
}

export default ConnectionInformationPage;