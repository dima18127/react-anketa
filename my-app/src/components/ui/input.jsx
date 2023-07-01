import React from 'react'
// import s from './input.module.css'
// import { useForm, SubmitHandler } from "react-hook-form"
function input(props)  {
    const {value, func} = props;
    // const { handleSubmit, register, errors } = useForm();
    return ( 
        <input 
        // ref={register({ required: true })}
         type="text" name="phone"
        onChange={ e => func(e.target.value)}
        value={value}/>
        // {errors.email && <span>The email is required</span>}
     );
}

export default input;