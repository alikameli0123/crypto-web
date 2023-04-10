import Register from '../../src/Components/Register/Register';
import Head from 'next/head'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '../../styles/personal_information.module.css';

const PersonalInformationPage = () => {
  const [fullname, setFullname] = useState('');
  const [uid, setUid] = useState('');
  const [birthday, setBirthday] = useState('');

  const [fill, setFill] = useState(false);

  useEffect(() => {
    if (fullname.length > 0 && uid.length > 0 && birthday.length > 0) {
      setFill(true);
    } else {
    }
  }, [fullname, uid, birthday])

  const getDetail = () => {
  }
  return (
    <>
      <Head>
        <title>personal Information</title>
      </Head>
      <Register stepNumber='1' next_link='connection-information' getDetail={getDetail} checkFill={fill} >

        <form method='POST'>

          {/* Fullname */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#fullname'> نام و نام‌خانوادگی </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} onChange={(e) => { setFullname(e.target.value) }} id='fullname' placeholder='محمد حسین رحمتی' />
              <span className={style.icon}>
                <Image src='/assets/register/user.png' width={20} height={20} alt='fullname' />
              </span>
            </div>
          </div>
          {/* UID */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='#UID'> کد ملی </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} onChange={(e) => { setUid(e.target.value) }} id='UID' placeholder='208-1235-456' />
              <span className={style.icon}>
                <Image src='/assets/register/card.png' width={20} height={20} alt='UID' />
              </span>
            </div>
          </div>
          {/* Birthday */}
          <div className={style.input_container}>
            <div className={style.label_parrent}>
              <label className={style.label} for='birthday'> تاریخ تولد </label>
            </div>
            <div className={style.input_parrent}>
              <input className={style.input} onChange={(e) => { setBirthday(e.target.value) }} id='birthday' placeholder='1370/06/31' />
              <span className={style.icon}>
                <Image src='/assets/register/calendar.png' width={20} height={20} alt='birthday' />
              </span>
            </div>
          </div>
        </form>
      </Register>
    </>
  )
}

export default PersonalInformationPage;