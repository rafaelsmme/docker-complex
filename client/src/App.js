import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/otherpage'>Other Page</Link>
        </li>
      </ul>

      <div>
        <Route exact path='/' component={Fib} />
        <Route path='/otherpage' component={OtherPage} />
      </div>
    </Router>
  )
}

export default App
