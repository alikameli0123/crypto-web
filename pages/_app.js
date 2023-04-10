import '@/styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'
import RegisterSidebar from './../src/Components/Register/RegisterSidebar';
import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  const router = useRouter()
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
          <Component {...pageProps} />
      }
    </>
  )
}
