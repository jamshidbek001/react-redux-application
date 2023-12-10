import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import {Main, Login, Register, Navbar, ArticleDetail,CreateArticle, User} from './components'
import AuthService from './services/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'
import EditArticle from './components/EditArticle'

const App = () => {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    const token = getItem('token')
    if(token) {
      getUser()
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/article/:slug' element={<ArticleDetail />} />
          <Route path='/create-article' element={<CreateArticle />}/>
          <Route path='/edit-article/:slug' element={<EditArticle />} />
          <Route path='/user' element={<User/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App