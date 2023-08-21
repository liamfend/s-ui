import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
      <h1>Layout</h1>
      <p>Welcome to my React app!</p>
      <div>
        this is the layout
        <Outlet />
      </div>
    </>
  )
}

export default Layout
