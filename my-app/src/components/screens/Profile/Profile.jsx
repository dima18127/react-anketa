
import React from 'react';
import { Link } from 'react-router-dom';
import Person from './Person/Person.jsx';
// import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { PHONE, EMAIL } from '../../redux/types.js'
import { addEmail, addPhone } from '../../redux/actions.js'



const Profile = function () {
  const dispatch = useDispatch();
  const email = useSelector(state => state.profile.email)
  const phone = useSelector(state => state.profile.phone)
  const state = useSelector(state=> state.profile)
  // console.log('email:' + email);
  // console.log("phone:"+phone);
  console.log(state);

  const SetPhone = (phone) =>{dispatch(addPhone(phone));}
  const SetEmail = (email) =>{dispatch(addEmail(email));}

  return (
  <div className='container'>
      <Person/>
      <form action="">
        <span>Номер телефона</span>
        <input type="text" name="phone"
         onChange={ e => SetPhone(e.target.value)}
         value={phone}/>

        <span>Email</span>
        <input type="text" name="email" 
        onChange={ e => SetEmail(e.target.value)}
        value={email}
        />

        <Link to="/auth" id="button-start" className='btn'>Начать
        </Link>
      </form>
  </div>);
}
export default Profile;
    