import React from 'react'
import {Input,TextArea} from '../ui'

const ArticleForm = props => {
  const {title,setTitle,description,setDesription,body,setBody} = props

  return (
    <div>
        <form>
            <Input label={"Title"} state={title} setState={setTitle}/>
            <TextArea label={"Description"} state={description} setState={setDesription} />
            <TextArea label={"Body"} state={body} setState={setBody} height='200px'/>
            <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Create</button>
        </form>
    </div>
  )
}

export default ArticleForm