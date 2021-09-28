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
        inputPrice.current.value += e.key
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
      <input autoFocus ref={inputPrice} className="price sum" type="text"/>
      <textarea ref={inputDescr} className="price descr"></textarea>
    </div>
  )
}
