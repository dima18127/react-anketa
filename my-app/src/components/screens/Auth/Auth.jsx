import React from 'react';
import { Link } from 'react-router-dom';
import m from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { setNick } from '../../redux/actions.js';
// import { NICK } from '../../redux/types';

function Auth() {
    const dispatch = useDispatch();
    const getNick = (nick) => dispatch(setNick(nick))
    const nick = useSelector(state => state.profile.nickName)
    const state = useSelector(state=> state.profile)
    console.log(state);

    return (
        <div  className={m.container}>
            <div className={m.metric}>
                <div className="metricProgress"></div>
                <span className='metricPoint metricPoint1'></span>
                <span className='metricPoint metricPoint2'></span>
                <span className='metricPoint metricPoint3'></span>
            </div>

            <form action="">

                <span>Nick name</span>
                <input type="text" id="field-nickname" name="phone" 
                onChange={e => getNick(e.target.value)} 
                value={nick}
                />
                <p>Tip</p>

                <span>Name</span>
                <input type="text" id="field-name" name="email" />
                <p>Tip</p>

                <span>Sername</span>
                <input type="text" id="field-sername" name="email" />
                <p>Tip</p>

                <span>Sex</span>
                <select name="sex" id="field-sex" placeholder='не выбрано'>
                    <option disabled selected defaultValue="not-determed"  >не выбрано</option>
                    <option id="field-sex-option-man" value="man">man</option>
                    <option id="field-sex-option-woman" value="woman">woman</option>
                </select>


                <Link to="/" id="button-back" className='btn btn_back'>Назад</Link>
                <Link to="/" id="button-next" className='btn'>Вперед</Link>
            </form>
        </div>
    );
}

export default Auth;