import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

import Bar from './components/bar'
import AddScreen from './components/addScreen'
import MessagesScreen from './components/messagesScreen'
import AnalyticsScreen from './components/analyticsScreen'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  

  const Screens = {
    'Add': <AddScreen />,
    'Messages': <MessagesScreen/>,
    'Analytics': <AnalyticsScreen/>
  }

  const [activeScreen, setActiveScreen] = useState('Add')

  

  return (
    <div className="face back">
      <Head>
        <title>Ranieri</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link href="/fav76.png" rel="apple-touch-icon"/>
        <link href="/fav76.png" rel="apple-touch-icon" sizes="76x76"/>
        <link href="/fav120.png" rel="apple-touch-icon" sizes="120x120"/>
        <link href="/fav152.png" rel="apple-touch-icon" sizes="152x152"/>
      </Head>
      <div className="form">
        
        <Bar 
          notifications={true}
          openMessages = { () => setActiveScreen('Messages') }
          add={false}
          openAdd = { () => setActiveScreen('Add') }
          openAnalytics = { () => setActiveScreen('Analytics') }
          activeScreen={ activeScreen }
        />

        { Screens[activeScreen] }
      </div>
    </div>
  )
}
