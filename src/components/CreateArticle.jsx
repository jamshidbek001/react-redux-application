import {Input, TextArea} from '../ui'
import { useState } from 'react'
const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [descrition, setDescrition] = useState('')
    const [body, setBody] = useState('')
    
    return (
        <div className="text-center">
            <h1 className="fs-2">Create Article</h1>
            <div className="w-75 mx-auto">
                <form>
                    <Input label={'Title'} state={title} setState={setTitle} />
                    <TextArea label={'Description'} state={descrition} setState={setDescrition} />
                    <TextArea label={'Body'} state={body} setState={setBody} height={'300px'}/>
                    <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateArticle