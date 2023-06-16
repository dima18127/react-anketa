import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import s from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { setNick, setName, setSerName,setMail } from '../../redux/actions.js';
import Input from '../../ui/input.jsx';
import Metric from '../../ui/metric/metric';
// import { NICK } from '../../redux/types';

function Auth() {
    const dispatch = useDispatch();
    const getNick = (nick) => dispatch(setNick(nick));
    const getName = (name) => dispatch(setName(name));
    const getSerName = (serName) => dispatch(setSerName(serName));
    const getMail = (mail) => dispatch(setMail(mail))

    const nick = useSelector(state => state.profile.nickName);
    const name = useSelector(state => state.profile.name);
    const serName = useSelector(state => state.profile.serName);
    const sex = useSelector(state => state.profile.sex);

    const state = useSelector(state=> state.profile);

    console.log(state);
    const [width, valueChange] = useState({width: "25%"});

    return (
        <div  className={s.container}>
            <Metric width={width}/>
            <form action="">
                <span>Nick name</span>
                <Input value={nick} func={getNick}/>
                <p>Tip</p>

                <span>Name</span>
                <Input value={name} func={getName}/>
                <p>Tip</p>

                <span>Sername</span>
                <Input value={serName} func={getSerName}/>
                <p>Tip</p>

                <span>Sex</span>
                <select name="sex" defaultValue={sex} id="field-sex" placeholder='не выбрано'
                    onChange={(e) => {getMail(e.target.value)}}
                    >
                    <option disabled value="not-determed"  >не выбрано</option>
                    <option id="field-sex-option-man" value="man">man</option>
                    <option id="field-sex-option-woman" value="woman">woman</option>
                </select>


                <Link to="/" id="button-back" className='btn btn_back'>Назад</Link>
                <Link to="/advantages" id="button-next" onClick={()=>valueChange({width: "50%"})} className='btn'>Вперед</Link>
            </form>
        </div>
    );
}

export default Auth;