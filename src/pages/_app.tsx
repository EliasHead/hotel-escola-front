import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hotel Escola IFCE</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
