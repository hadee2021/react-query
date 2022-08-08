import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heroes">그냥 Heroes</Link> 
        </li>
        <li>
          <Link to="/rq-super-heroes">RQ Heroes</Link> 
        </li>
        <li>
          <Link to="/rq-parallel">Parallel</Link> 
        </li>
        <li>
          <Link to="/rq-dynamic-parallel">Dynamic Parallel</Link> 
        </li>
        <li>
          <Link to="/rq-dependent">dependent</Link> 
        </li>
        <li>
          <Link to="/rq-paginated">page</Link> 
        </li>
      </ul>
    </nav>
  )
}

export default NavBar