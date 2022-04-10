import React from 'react'
import SideBar from './components/SideBar/SiderBar'
import TopBar from './components/TopBar/TopBar'

import './main.css'

const Main = (props) => {
  const { children } = props

  return (
    <>
      <SideBar />

      <div className="main_content">
        <TopBar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Main
