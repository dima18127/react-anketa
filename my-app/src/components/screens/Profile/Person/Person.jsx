function Person() {
    return ( <div>
        <div className='profile'>
            <div className='profile_wrap'>
              <img width='80px' height="80px" src="images/ava.png"/>
              <div className='ProfileData'>
                  <h1>Дмитрий Макаров</h1>
                  <div className='social'>
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