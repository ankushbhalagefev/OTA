import React from 'react'
import './SignIn.scss'
const SignIn = () => {
    return (
        <div className='sign_container'>
            <div className='card sign_in_card'>
                <h3>Sign In</h3>
                <form>
                    <div>
                        <label htmlFor='username'>UserName or Email Id</label>
                        <input type='text' placeholder='Enter UserName or Email' id='username' />
                    </div>
                    <div>
                        <label htmlFor='password'>UserName or Email Id</label>
                        <input type='password' placeholder='Enter Password' id='password' />
                    </div>
                    <div>
                        <button>Sign In to Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;