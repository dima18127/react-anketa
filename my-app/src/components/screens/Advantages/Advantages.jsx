import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import s from './Advantages.module.css';
import {useDispatch, useSelector} from 'react-redux'
// import { setNick, setName, setSerName,setMail } from '../../redux/actions.js';
import Input from '../../ui/input.jsx';
import Metric from '../../ui/metric/metric';
// import { NICK } from '../../redux/types';

function Auth() {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.profile);
    const [width, valueChange] = useState({width: "50%"});

    return (
        <div  className={s.container}>
            <Metric width={width}/>
            <form action="">
                <span>Advantages</span>
            <Input/>
            <Input/>
            <Input/>
            <button  to="/auth" id="add" className={s.plus}>+</button>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />

                <Link to="/auth" id="button-back" className='btn btn_back'>Назад</Link>
                <Link to="/about" id="button-next" onClick={()=>valueChange({width: "75%"})} className='btn'>Вперед</Link>
            </form>
        </div>
    );
}

export default Auth;