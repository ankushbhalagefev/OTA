import React from 'react'
import './SignUp.scss'
const SignUp = () => {
  return (
    <div className='signup_container'>
    <div className='card sign_up_card'>
        <h3>Sign Up</h3>
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter Name' id='name' />
            </div>
            <div>
                <label htmlFor='email'>Email Id</label>
                <input type='text' placeholder='Enter Email' id='email' />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' id='password' />
            </div>
            <div>
                <label htmlFor='confirm_password'>Confirm Password</label>
                <input type='password' placeholder='Enter Confirm Password' id='confirm_password' />
            </div>
            <div>
                <button>Sign Up</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default SignUp;