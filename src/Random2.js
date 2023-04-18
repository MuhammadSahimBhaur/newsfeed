import React from 'react'
import { Outlet, Link } from "react-router-dom"
export const Random2 = () => {
  return (
    <div>Random2
      <div><Link to="/">Back to Home!!</Link></div>
      <Link to="Child">To Child!</Link>
      <Link to="Child2">To Child2!</Link>
      <Outlet />
      <Outlet />
    </div>

  )
}
