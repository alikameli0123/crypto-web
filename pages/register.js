import RegisterSidebar from '@/src/Components/Register/RegisterSidebar';
import Head from 'next/head'
import Register from './../src/Components/Register/Register';
import style from "../styles/registerPage.module.css";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <div className={`container-fluid ${style.registerLayout}`}>
        <div className='row'>
          <div className='col-12 col-md-9'>
            <Register />
          </div>
          <div className='col-12 col-md-3'>
            <RegisterSidebar />
          </div>
        </div>
      </div>

    </>
  )
}

export default RegisterPage;