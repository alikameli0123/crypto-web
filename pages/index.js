import Head from 'next/head'
import Router from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {

  useEffect(() => {
    Router.push('/register/personal-information')
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  )
}

export default HomePage;