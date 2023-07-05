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
    const [width, widthSet] = useState(0);
    const [tab, setTab]= useState(1);
    return (
        <div  className={s.container}>
            <Metric width={width} tab={tab}/>
                {tab === 1 && <Tab1 tab={tab} setTab={setTab} widthSet={widthSet} />}
                {tab === 2 && <Tab2 tab={tab} setTab={setTab} widthSet={widthSet} />}
                {tab === 3 && <Tab3 tab={tab} setTab={setTab} widthSet={widthSet} />}
        </div>
    ); 
}

export default Create;