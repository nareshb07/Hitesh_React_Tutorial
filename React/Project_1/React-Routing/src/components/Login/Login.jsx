import React from 'react'

function Login() {
  return (
    <>
        <section>
          <div>
            <label>Email Address</label>
            <input className='mx-5 my-2' />
          </div>

          <div>
            <label>Password </label>
            <input className='mx-5' />
          </div>
            
        </section>
    </>
  )
}

export default Login
