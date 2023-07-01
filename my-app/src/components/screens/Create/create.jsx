import React ,{useState, useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import s from './create.module.css';
import {useDispatch, useSelector} from 'react-redux'
import Metric from '../../ui/metric/metric';
import Tab1 from './Tab_1/tab1';
import Tab2 from './Tab_2/Tab2';
import Tab3 from './Tab_3/Tab3';
import { useForm, SubmitHandler } from "react-hook-form"
// import { NICK } from '../../redux/types';

function Create() {

    const state = useSelector(state=> state.profile);
    const [width, valueChange] = useState(0);
    const [tab, setTab]= useState(2);
    const[btn,SetBtn] = useState('Вперед');



    return (
        <div  className={s.container}>
            <Metric width={width} tab={tab}/>
            {/* <form action=""> */}
                {tab === 1 ?<Tab1 tab={tab} setTab={setTab}/> : null}
                {tab === 2 ?<Tab2 tab={tab} setTab={setTab}/> : null}
                {tab === 3 ?<Tab3 tab={tab} setTab={setTab}/> : null}
                {/* </form> */}
            {/* <button  id="button-back" className='btn btn_back' onClick={()=>{
                            if (tab === 1) {
                                navigate(-1);
                            }
                            else {
                                setTab(tab-1);
                            }
                        }}
                >Назад
            </button>
            <button disabled={!isValid} id="button-next" className='btn' onClick={(e)=>{
                valueChange(width+1);
                    console.log(width);
                    setTab(tab+1);
                    if (tab === 2){
                        SetBtn('Отправить')
                    } else {
                        SetBtn('Далее')
                    }
                    }} 
                >{btn}
            </button> */}
        </div>
    ); 
}

export default Create;