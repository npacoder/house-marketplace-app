
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  
  const [ email, setEmail ] = useState('')
  
  const onChange = e => setEmail(e.target.value)
  
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was send')
    } catch (error) {
      toast.error('Could not send rest email')
    }
  }
  
  return (
    <div className='pageContainer'>
      <header>
      <p className='pageHeader'>
        Forgot Pasword
      </p>
      </header>
      
      <main>
        <form onSubmit={onSubmit}>
          <input type='email' id='email' className='emailInput' value={email} onChange={onChange} placeholder='Email' />
          
          <Link to='/sign-in' className='forgotPasswordLink'>
            Sign In
          </Link>
          
          <div className='signInBar'>
            <div className='signInText'>
              Send Reset Link
            </div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#fff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword