import { useState } from 'react'
import {ArticleForm} from './index.js'
import ArticleServie from '../services/article.js'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article.js'
import { useNavigate } from 'react-router-dom'

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {articles} = useSelector(state => state.article)

    const formSubmit = async (e) => {
        e.preventDefault()
        const article = {title,description,body}
        dispatch(postArticleStart())
        
        try {
            const response = await ArticleServie.postArticle(article)
            const arr = [...articles,response.article]
            console.log(arr)
            dispatch(postArticleSuccess())
            dispatch(getArticleSuccess(arr))
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())
        }
    }
    
    const formProps = {title,setTitle,description,setDescription,body,setBody,formSubmit}
    
    return (
        <div className="text-center">
            <h1 className="fs-2">Create Article</h1>
            <div className="w-75 mx-auto">
                <ArticleForm {...formProps} />
            </div>
        </div>
    )
}

export default CreateArticle