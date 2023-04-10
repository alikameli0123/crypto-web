import Register from '../../src/Components/Register/Register';
import Head from 'next/head'
import Link from 'next/link';
import Input from '@/src/Components/Input';

const PersonalInformationPage = () => {
  return (
    <>
      <Head>
        <title>personal Information</title>
      </Head>
      {/* <Link href='/register/connection-information'> connection information</Link> */}
      <Register stepNumber='1' next_link='connection-information'>
        <Input icon='/assets/register/user.png' id='fullname' label='نام و نام‌خانوادگی' placeholder='محمد حسین رحمتی' />
        <Input icon='/assets/register/card.png' id='UID' label='کد ملی' placeholder='208-1235-456' />
        <Input icon='/assets/register/calendar.png' id='birthday' label='تاریخ تولد' placeholder='1370/06/31' />
      </Register>
    </>
  )
}

export default PersonalInformationPage;