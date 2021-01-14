import React from 'react'
import App from '../App/App'
import { Link } from 'react-router-dom'
import './Root.css'

function Root() {
  return <div>
    <Link to="/" >
      <h1>Petful</h1>
    </Link>
    <App />
  </div>
}

export default Root
