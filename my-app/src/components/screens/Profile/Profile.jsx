import React ,{useState, useEffect,useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Person from './Person/Person.jsx';
import {useDispatch, useSelector} from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from 'react-input-mask';
// import { addEmail, addPhone } from '../../toolkitRedux/toolkitReducer.js';
import s from "./Profile.module.css"
import { addEmail, addPhone } from '../../toolkitRedux/toolkitSlice.js';




const Profile = function () {
  const state = useSelector(state=> state.toolkit)
console.log(state);
const navigate = useNavigate();

const phone = useSelector(state => state.toolkit.phone)
  const email = useSelector(state => state.toolkit.email)
  

  const dispatch = useDispatch();

  
  const SetPhone = (phone) =>{dispatch(addPhone(phone));}
  const SetEmail = (email) =>{dispatch(addEmail(email));}
  

  const {register,handleSubmit, formState: { errors, isValid } } = useForm({defaultValues: {
    email:  email,
    phone: phone,
    },mode: 'onBlur'});
    const onSubmit = (data) => {
      console.log(data);
      SetPhone(data.phone);
      SetEmail(data.email);
      console.log(state);
      navigate('/create')  
    };
  return (
  <div className='container'>
      <Person/>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <span>Номер телефона</span>

        <InputMask 
        mask="+7(999)999 99 99"
        className='input'
        placeholder='+7(999)999 99 99'
        

        {...register("phone", {
          required: 'enter your number',
        })}
        />
                       {errors.phone && (
            <p className="errorMsg">{errors.phone.message}</p>
        )}
 
        <span>Email</span>
        <input type="text"   
        {...register("email", {
          required: "Email is required" ,
           pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message : "Email is not valid."}
          })}
        />
        {errors.email && (
            <p className="errorMsg">{errors.email.message}</p>
        )}

        <button
        disabled={!isValid}
         type='submit' id="button-start" className={`${s.btnstart} btn`}>Далее
        </button> 

      </form>
  </div>);
}
export default Profile;
    