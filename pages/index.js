import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  let inputPrice = useRef()
  let inputDescr = useRef()

  const [inputQueue, setInputQueue] = useState('inputPrice')
  const [focusState, setFocusState] = useState(false)
  
  /*const changeInputQueue = useCallback((e) => {

    if(e.key === 'Enter') {
      if(inputQueue === 'inputPrice') { 
        setInputQueue('inputDescr') 
      } else { 
        setInputQueue('inputPrice') 
       }
    } else {
      if(inputQueue === 'inputPrice' && !focusState) {
        let currentVal = inputPrice.current.value.replace(' ₽', '')
        inputPrice.current.value = currentVal + e.key + ' ₽'
      } else if(inputQueue === 'inputDescr' && !focusState) {
        inputDescr.current.value += e.key
      }

    }
  })
  */

  const priceSumKeypress = (e) => {
    e.preventDefault()
    if(e.key === 'Enter') {
      if(inputQueue === 'inputPrice') { 
        setInputQueue('inputDescr') 
        inputDescr.current.focus()
      } else { 
        setInputQueue('inputPrice') 
       }
    } else if(e.key === 'Backspace') {
      let currentVal = inputPrice.current.value.replace(' ₽', '').slice(0, -1)
      inputPrice.current.value = currentVal + ' ₽'
    } else if(isFinite(e.key)) {
      let currentVal = inputPrice.current.value.replace(' ₽', '')
      inputPrice.current.value = currentVal + e.key + ' ₽'
    }
  }

  const makeFocus = () => {
    setFocusState(true)
    setInputQueue('inputPrice') 
  }

  const makeFocusOut = () => {
    setFocusState(false)
    setInputQueue('inputDescr')
  }

  const makeDescrFocusOut = (e) => {
    if(e.key === 'Enter') {
      inputDescr.current.blur()
    }
  }

  useEffect(()=> {
    /*window.addEventListener('keypress', changeInputQueue)*/
    inputPrice.current.addEventListener('focus', makeFocus)
    inputPrice.current.addEventListener('focusout', makeFocusOut)
    inputPrice.current.addEventListener('keydown', priceSumKeypress)

    inputDescr.current.addEventListener('keydown', makeDescrFocusOut)

    return () => {
      /*window.removeEventListener('keypress', changeInputQueue)*/
      inputPrice.current.removeEventListener('focus', makeFocus)
      inputPrice.current.removeEventListener('focusout', makeFocusOut)
      inputPrice.current.removeEventListener('keydown', priceSumKeypress)

      inputDescr.current.removeEventListener('keydown', makeDescrFocusOut)

    }

  }, [makeFocus, makeFocusOut, priceSumKeypress, makeDescrFocusOut])

  /* Set Users List */
  const users = {
    'me': {
      name: 'Я',
      avatar: ''
    },
    'yurii': {
      name: 'Юрец',
      avatar: ''
    },
    'kristina': {
      name: 'Кристина',
      avatar: ''
    },
    'daniil': {
      name: 'Даня',
      avatar: ''
    },
    'new': {
      name: 'Еще...',
      avatar: ''
    }
  }

  const [usersList, setUsersList] = useState([true, false, false, false])

  const touchUser = (m) => {
    let _usersList = [...usersList]
    _usersList[m] = !usersList[m]

    setUsersList(_usersList)
  }

  let usersArr = Object.keys(users).map((key, m) => {
    let selected = ''
    if(usersList[m]) selected += ' selected'

    return (
      <div className={"users__profile" + selected} onClick={() => touchUser(m)}>
        <div className="users__avatar"/>
        <div className="users__name">{users[key].name}</div>
      </div>
    )
  })

  

  return (
    <div className="face back">
      <Head>
        <title>Ranieri</title>
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <div className="form">
        <input placeholder="0 ₽" ref={inputPrice} className="price sum" type="text"/>
        <input ref={inputDescr} placeholder="Комментарий" className="price descr"/>

        <div className="users">
          <div className="users__line">
            {
              usersArr.map(key => {
                return key
              })
            }
          </div>
        </div>

        <div className="form__btn">Добавить</div>
      </div>
    </div>
  )
}
