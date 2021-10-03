import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

import Bar from './components/bar'
import AddScreen from './components/addScreen'
import MessagesScreen from './components/messagesScreen'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  

  const Screens = {
    'Add': <AddScreen />,
    'Messages': <MessagesScreen/>
  }

  const [activeScreen, setActiveScreen] = useState('Add')

  

  return (
    <div className="face back">
      <Head>
        <title>Ranieri</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <div className="form">
        
        <Bar 
          notifications={true}
          openMessages = { () => setActiveScreen('Messages') }
          add={false}
          openAdd = { () => setActiveScreen('Add') }
          activeScreen={ activeScreen }
        />

        { Screens[activeScreen] }
      </div>
    </div>
  )
}
