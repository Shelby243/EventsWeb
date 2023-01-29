import MainLayout from '@/src/components/layout/main-layout'
import '@/styles/globals.css'
import '@/styles/general.sass'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [login,setLogin]=useState(false)
  const [dark,setDark]=useState(false)
  const changeBack=()=>{
    setLogin(!login)
    setDark(!dark)
  }

  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div style={{backgroundColor:login?"#000000":"#fff",color:login?"#fff":"#000000"}} >
    <MainLayout changeBack={changeBack} >
    <Component {...pageProps} />
    </MainLayout>
      
    </div>
  )
}
