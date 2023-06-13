import Head from 'next/head';
import { useEffect } from 'react';
import Router  from 'next/router';

const RegisterPage = () => {
  useEffect(()=>{
    Router.replace('/register/personal-information')
  },[])
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

    </>
  )
}

export default RegisterPage;