import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  let inputPrice = useRef()
  let inputDescr = useRef()

  const [inputQueue, setInputQueue] = useState('inputPrice')
  const [num, setNum] = useState(3)
  
  const changeInputQueue = useCallback((e) => {
    setNum(Math.random())
    console.log(num)

    if(e.key === 'Enter') {
      console.log('Happ')
      if(inputQueue === 'inputPrice') { 
        setInputQueue('inputDescr') 
      } else { 
        setInputQueue('inputPrice') 
       }
    } else {
      if(inputQueue === 'inputPrice') {
        let currentVal = inputPrice.current.value.replace(' ₽', '')
        inputPrice.current.value = currentVal + e.key + ' ₽'
      } else if(inputQueue === 'inputDescr') {
        inputDescr.current.value += e.key
      }

    }
  })

  useEffect(()=> {
    window.addEventListener('keypress', changeInputQueue)
    return () => {
      window.removeEventListener('keypress', changeInputQueue)
    }

  }, [changeInputQueue])

  return (
    <div className={styles.container}>
      <Head>
        <title>Ranieri</title>
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <input placeholder="0 ₽" ref={inputPrice} className="price sum" type="text"/>
      <input ref={inputDescr} className="price descr"/>
    </div>
  )
}
