import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import {Main, Login, Register, Navbar, ArticleDetail} from './components'
import AuthService from './services/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'
import ArticleServie from './services/article'
import { getArticleSuccess, getArticlesStart } from './slice/article'


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

  const getArticle = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleServie.getArticle()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    const token = getItem('token')
    if(token) {
      getUser()
    }
    getArticle()
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
        </Routes>
      </div>
    </div>
  )
}

export default App