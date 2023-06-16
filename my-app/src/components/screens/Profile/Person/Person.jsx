import React from "react"
import s from './Person.module.css'

function Person() {
    return ( <div>
        <div className={s.rofile}>
            <div className={s.profile_wrap}>
              <img width='80px' height="80px" src="images/ava.png"/>
              <div className={s.ProfileData}>
                  <h1>Дмитрий Макаров</h1>
                  <div className={s.social}>
                     <a href="#"> Telegram</a> 
                     <a href="#"> GitGub</a> 
                     <a href="#"> Resume</a> 
                  </div>
              </div>
            </div>
            <div></div>
      </div>
      <hr />
    </div>
     );
}

export default Person;