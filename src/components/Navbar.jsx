import React from 'react'
import { logo } from '../constants'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {loggedIn,user} = useSelector(state => state.auth)
  console.log(loggedIn)
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3">
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className='me-3 m-0 py-2 link-body-emphasis text-decoration-none'>{user.username}</p>
            <button className='btn btn-outline-danger'>Logout</button>
          </>
        ) : (
          <>
            <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/login'}>
            Login
            </Link>

            <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/register'}>
                Register
            </Link>
          </>
        )}
        
      </nav>
    </div>
  )
}

export default Navbar