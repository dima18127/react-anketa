import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import s from './About.module.css';
import {useDispatch, useSelector} from 'react-redux'
// import { setNick, setName, setSerName,setMail } from '../../redux/actions.js';
// import Input from '../../ui/input.jsx';
import Metric from '../../ui/metric/metric';
// import { NICK } from '../../redux/types';

function Auth() {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.profile);
    const [width, valueChange] = useState({width: "100%"});

    return (
        <div  className={s.container}>
            <Metric width={width}/>
            <form action="">
                <span>Advantages</span>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <Link to="/auth" id="button-back" className='btn btn_back'>Назад</Link>
                <Link to="" id="button-next" onClick={()=>valueChange({width: "75%"})} className='btn'>Отправить</Link>
            </form>
        </div>
    );
}

export default Auth;