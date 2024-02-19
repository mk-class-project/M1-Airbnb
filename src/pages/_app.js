import React from 'react'
import { useRouter } from 'next/router'

import styles from '@/styles/global.scss'

import MainLayout from '@/layouts/MainLayout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp

