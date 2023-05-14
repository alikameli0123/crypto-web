import Register from '../../src/Components/Register/Register';
import Head from 'next/head'
import Link from 'next/link';
import SimpleReactValidator from "simple-react-validator";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import style from '../../styles/personal_information.module.css';
import DatePicker from "react-datepicker";
import Router from 'next/router';

const PersonalInformationPage = () => {
  const [fullname, setFullname] = useState('');
  const [uid, setUid] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Filling this field is mandatory",
        min: 'The field value must not be less than the sample value',
        integer: 'The input value must be an integer',
        in: 'password and confirm password does not matched!',
      },
      element: message => <div style={{ color: "red" }}>{message}</div>
    })
  );

  const nextStep = (e) => {
    e.preventDefault();
    const userInfo = [fullname, password, confirmPassword]
    try {
      if (validator.current.allValid()) {
        localStorage.setItem('personal', JSON.stringify(userInfo));
        Router.push('/register/connection-information')
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <Head>
        <title>personal Information</title>
      </Head>
      <Register stepNumber='1' next_link='register/connection-information' nextStep={nextStep}>
        <form method='POST'>
          {/* Fullname */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#fullname'> Fullname</label>
            </div>
            <div className={style.input_parrent}>

              <input className={style.input}
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
                name="fullname"
                id='fullname'
                placeholder='John Wick' />
              <span className={style.icon}>
                <Image src='/assets/register/user.png' width={20} height={20} alt='fullname' />
              </span>
              {validator.current.message(
                "fullname",
                fullname,
                "required|min:5"
              )}
            </div>
          </div>
          {/* UID */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#UID'> UID</label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} type="text"
                onChange={(e) => {
                  setUid(e.target.value);
                  validator.current.showMessageFor("uid");
                }} id='uid' name='uid' placeholder='208-1235-456' />
              <span className={style.icon}>
                <Image src='/assets/register/card.png' width={20} height={20} alt='UID' />
              </span>
              {validator.current.message(
                "uid",
                uid,
                "required|min:10|integer"
              )}
            </div>
          </div>
          {/* Password */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#password'> Password </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} type='password'
                onChange={(e) => {
                  setPassword(e.target.value)
                  validator.current.showMessageFor("password");
                }} id='password' name='password' placeholder='******' />
              <span className={style.icon}>
                <Image src='/assets/register/lock.png' width={20} height={20} alt='password' />
              </span>
              {validator.current.message(
                "password",
                password,
                "required|min:6"
              )}
            </div>
          </div>
          {/* Confirm Password */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#confirmPassword'> Confirm Password</label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} type='password' onChange={(e) => {
                setConfirmPassword(e.target.value)
                validator.current.showMessageFor("confirmPassword");
              }} id='confirmPassword' name='confirmPassword' placeholder='******' />
              <span className={style.icon}>
                <Image src='/assets/register/lock.png' width={20} height={20} alt='confirmPassword' />
              </span>
              {validator.current.message(
                "confirmPassword",
                confirmPassword,
                `required|min:6|in:${password}`,
              )}
            </div>
          </div>
          {/* Birthday */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='birthday'> Birth Date</label>
            </div>
            <div className={style.input_parrent}>
              <DatePicker selected={birthday} dateFormat="MM/dd/yyyy" className={style.input} name="birthday" onChange={
                (date) => {
                  setBirthday(date);
                  validator.current.showMessageFor("birthday");
                }} id='birthday' />
              <span className={style.icon}>
                <Image src='/assets/register/calendar.png' width={20} height={20} alt='birthday' />
              </span>
              {validator.current.message(
                "birthday",
                birthday,
                'required'
              )}
            </div>
          </div>
        </form>
      </Register>
    </>
  )
}

export default PersonalInformationPage;