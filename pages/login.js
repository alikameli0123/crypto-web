import Head from 'next/head';
import Login from '../src/Components/LoginPanel/Login';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  )
}

export default LoginPage;