import React from 'react'
import s from './input.module.css'
function input(props)  {
    const {value, func} = props;
    return ( 
        <input type="text" name="phone"
        onChange={ e => func(e.target.value)}
        value={value}/>
     );
}

export default input;