import { useEffect, useState, useRef } from "react"

import {users} from '../../data/users'
import SwitchToogle from "./switchToogle"

const AddScreen = () => {
    let inputPrice = useRef()
  let inputDescr = useRef()

  const [inputQueue, setInputQueue] = useState('inputPrice')
  
  

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
      setTotPrice(currentVal)
    } else if(isFinite(e.key)) {
      let currentVal = inputPrice.current.value.replace(' ₽', '')
      inputPrice.current.value = currentVal + e.key + ' ₽'
      setTotPrice(currentVal + e.key)
    }
  }

  const makeFocus = () => {
    setInputQueue('inputPrice') 
  }

  const makeFocusOut = () => {
    setInputQueue('inputDescr')
  }

  const makeDescrFocusOut = (e) => {
    if(e.key === 'Enter') {
      inputDescr.current.blur()
    }
  }

  useEffect(()=> {
    let shareWithSum = 0
    for(let i=0; i<usersList.length; i++) {
      if(usersList[i]) shareWithSum += 1
    }

    if(shareWithSum === 0) shareWithSum = 1
    setShareWith(shareWithSum)

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
    const [totPrice, setTotPrice] = useState(0)

  

  const [usersList, setUsersList] = useState([true, false, false, false, false])
  const [shareWith, setShareWith] = useState(1)
  const usersRefs = [useRef(), useRef(), useRef(), useRef(), useRef()]

  const touchUser = (m) => {
    let _usersList = [...usersList]
    _usersList[m] = !usersList[m]

    setUsersList(_usersList)
  }

  let usersArr = Object.keys(users).map((key, m) => {
    let selected = ''
    if(usersList[m]) selected += ' selected'

    return (
      <div key={"userProfile_" + m} className={"users__profile" + selected} ref={ usersRefs[m] } onClick={ () => touchUser(m) }>
        <div className="users__avatar">
          <div className="users__photo" style={{backgroundImage: "url('" + users[key].avatar + "')", backgroundSize: 'contain'}}/>
        </div>
        <div className="users__name">{users[key].name}</div>
      </div>
    )
  })

    return (
        <>
           <input placeholder="0 ₽" ref={inputPrice} className="price sum borders" type="text"/>
            <input ref={inputDescr} placeholder="Комментарий" className="price descr borders"/>

            <div className="switchToogle">
              <SwitchToogle tabs={['Перевести', 'Разделить']}/>
            </div>

            <div className="users">
                <div className="users__line">
                    {
                    usersArr.map(key => {
                        return key
                    })
                    }
                </div>
            </div>
            <div className="form__results space-between borders">
            <span>Общая сумма</span>
            <b>{totPrice} ₽</b>
            </div>
            <div className="form__results space-between borders">
            <span>С меня</span>
            <b>{ Math.round(Number(totPrice) / shareWith) } ₽</b>
            </div>
            <div className="form__btn borders">Добавить</div> 
        </>
    )
}

export default AddScreen