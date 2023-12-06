import { useState } from 'react'
import { icon } from '../constants'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import {loginUserStart} from '../slice/auth.js'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = e => {
    e.preventDefault()
    dispatch(loginUserStart())
  } 

  return (
    <div className='text-center mt-5'>
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="60" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input label={"Email"} state={email} setState={setEmail}/>
          <Input label={"Password"} type={'password'} state={password} setState={setPassword} />
          <button className="btn btn-primary w-100 py-2 mt-4" type="submit" disabled= {isLoading} onClick={loginHandler}>{isLoading ? "loading.." : 'Login'}</button>
        </form>
      </main>
    </div>
  )
}

export default Login