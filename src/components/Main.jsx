import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../ui'
import ArticleServie from '../services/article'
import { getArticleSuccess, getArticlesStart } from '../slice/article'
import ArticleCard from './ArticleCard'

const Main = () => {
  const {articles,isLoading} = useSelector(state => state.article)
  const dispatch = useDispatch()

  const getArticle = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleServie.getArticle()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticle()
  },[])
  
  return (
    <>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map(item => (
          <ArticleCard item={item} getArticle={getArticle} />
        ))}
      </div>
    </>
  )
}

export default Main