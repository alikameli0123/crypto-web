import Head from 'next/head'
import Router from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {

  useEffect(() => {
    Router.push('/login')
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