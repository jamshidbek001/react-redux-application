import React from 'react'
import { logo } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'

const Navbar = () => {
  const {loggedIn,user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')
  }

  return (
    <div className="container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3">
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <Link className='me-3 m-0 py-2 link-body-emphasis text-decoration-none' to={'/user'}>{user.username}</Link>
            <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/create-article'}>
              create
            </Link>
            <button className='btn btn-outline-danger' onClick={logoutHandler}>Logout</button>
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