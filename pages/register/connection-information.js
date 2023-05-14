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
  const [verify,setVerify] = useState(false);

  const [firstCode,setFirstCode] = useState('');
  const [secCode,setSecCode] = useState('');
  const [threeCode,setThreeCode] = useState('');
  const [fourCode,setFourCode] = useState('');

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
      if (validator.current.fieldValid('email')) {
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

  const verifyEmail = (e) => {
    e.preventDefault();
    if(validator.current.allValid()){
      setVerify(true)
    }else {
      validator.current.showMessages();
      forceUpdate(1);
    }
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
                  <Image src='/assets/register/clipboardtick.png'  width={20} height={20} alt='clipboardtick' />
                <p>
                  A verification code has been sent to {email}.
                  <br/>
                  This code is valid for <Countdown date={Date.now() + 120000} daysInHours={true} /> minutes
                </p>
              </div>
              <div className={style.confirmVerify}>
                <p>Verification code</p>
                <div className={style.verifyCode}>

                  <input 
                  onChange={(e)=>{
                    handleFocus(e);
                    setFirstCode(e.target.value);
                    validator.current.showMessageFor("code1");
                  }} name='code1' type="text" pattern="\d*" maxLength="1" autoFocus={true} />
                    {validator.current.message(
                    "code1",
                    firstCode,
                    "required"
                  )}
                  <input onChange={(e)=>{
                    handleFocus(e);
                    setSecCode(e.target.value);
                    validator.current.showMessageFor("code2");
                  }}  name='code2' type="text" pattern="\d*" maxLength="1" />
                    {validator.current.message(
                      "code2",
                      secCode,
                      "required"
                    )}
                  <input onChange={(e)=>{
                    handleFocus(e);
                    setThreeCode(e.target.value);
                    validator.current.showMessageFor("code3");
                  }} name='code3' type="text" pattern="\d*" maxLength="1" />
                    {validator.current.message(
                      "code3",
                      threeCode,
                      "required"
                    )}
                  <input onChange={(e)=>{
                    handleFocus(e);
                    setFourCode(e.target.value);
                    validator.current.showMessageFor("code4");
                  }} name='code4' type="text" pattern="\d*" maxLength="1" />
                  {validator.current.message(
                    "code4",
                    fourCode,
                    "required"
                  )}
                </div>
                <button className={style.confirmNumberBtn} onClick={verifyEmail}>Verify</button>
               {verify &&  <p><b>Email verifyed.</b></p>}
              </div>
            </div>
          }
        </form>
      </Register>
    </>
  )
}

export default ConnectionInformationPage;