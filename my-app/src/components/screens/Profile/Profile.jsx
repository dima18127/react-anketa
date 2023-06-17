
import React from 'react';
import { Link } from 'react-router-dom';
import Person from './Person/Person.jsx';
import {useDispatch, useSelector} from 'react-redux';
import { addEmail, addPhone } from '../../redux/actions.js';
import Input from '../../ui/input.jsx';



const Profile = function () {
  const dispatch = useDispatch();
  const email = useSelector(state => state.profile.email)
  const phone = useSelector(state => state.profile.phone)
  const state = useSelector(state=> state.profile)
  console.log(state);

  const SetPhone = (phone) =>{dispatch(addPhone(phone));}
  const SetEmail = (email) =>{dispatch(addEmail(email));}

  return (
  <div className='container'>
      <Person/>
      <form action="">
        <span>Номер телефона</span>
        <Input value={phone} func={SetPhone}/>
        <span>Email</span>
        <Input value={email} func={SetEmail}/>
        <Link to="/create" id="button-start" className='btn'>Начать
        </Link>
      </form>
  </div>);
}
export default Profile;
    