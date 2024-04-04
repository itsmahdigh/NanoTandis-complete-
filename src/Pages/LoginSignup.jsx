import React from 'react'
import './CSS/LognSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>ثبت نام</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder={'نام شما'}/>
          <input type="email" placeholder={'آدرس ایمیل'}/>
          <input type="password" placeholder={'رمز عبور'}/>
        </div>
        <button>ادامه!</button>
        <p className={'loginsignup-login'}> از قبل اکانت دارید؟!<span>وارد شوید!</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name={''} id={''}/>
          <p>با ادامه دادن قوانین مارا قبول کرده اید!</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup
