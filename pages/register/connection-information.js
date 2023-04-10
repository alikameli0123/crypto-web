import Head from 'next/head'
import Link from 'next/link';

const ConnectionInformationPage = () => {


  return (
    <>
      <Head>
        <title>Connection Information</title>
      </Head>
      <Link href='/register/place-information'> place information</Link>

    </>
  )
}

export default ConnectionInformationPage;