import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
      <div>
        <div className='newsletter'>
          <h1>از آخرین تغییرات این حوزه باخبر شوید

          </h1>

          <p>ایمیل خود را وارد کنید!</p>
          <div>
            <input type="email" placeholder='ایمیل تان را وارد کنید!'/>
            <button>ثبت</button>
          </div>
        </div>
      </div>
  )
}
export default NewsLetter;