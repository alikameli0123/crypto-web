import '@/styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'
import RegisterSidebar from './../src/Components/Register/RegisterSidebar';
import '../styles/globals.css';
import axios from 'axios';
import Cookie from '@/src/Api/Cookie';
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react';
import Router from 'next/router';
import Sidebar from './../src/Components/Dashboard/Sidebar';
import NavbarComponent from '@/src/Components/Dashboard/Navbar';

// axios.interceptors.request.use(
//   async config => {
//     config.headers = {
//       'Authorization': `Bearer ${Cookie.getCookie('token')}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     return config;
//   },
  
//   error => {
//     Promise.reject(error)
//   })

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!Cookie.getCookie('token')) {
      Router.push('/login');
    }
  }, [])
  return (
    <>
      {
        router.asPath.includes('register') ?
          <div className='container-fluid registerLayout'>
            <div className='row d-flex justify-content-center'>
              <div className='col-12 col-md-9 p-0'>
                <Component {...pageProps} />
              </div>
              <div className='col-12 col-md-3 p-0'>
                <RegisterSidebar />
              </div>
            </div>
          </div>
          :
          router.asPath.includes('dashboard') ?
            <div className={`container-fluid dashboard-container`}>
              <div className={`row`}>
                <div className={`col-12 col-xl-10 m-0 p-0`}>
                  <NavbarComponent />
                  <Component {...pageProps} />
                </div>
                <div className={`d-none d-xl-flex col-2`}>
                  <Sidebar />
                </div>
              </div>
            </div>
            :
            <Component {...pageProps} />

      }
    </>
  )
}
