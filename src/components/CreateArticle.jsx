import { useState } from 'react'
import {ArticleForm} from './index.js'

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')

    const formProps = {title,setTitle,description,setDescription,body,setBody}
    
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