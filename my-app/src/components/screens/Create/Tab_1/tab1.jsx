import React ,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setNick, setName, setSerName,setMail } from '../../../redux/actions.js';
// import Metric from '../../ui/metric/metric';
import { useForm, SubmitHandler } from "react-hook-form";



function tab1({tab,setTab}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getNick = (nick) => dispatch(setNick(nick));
    const getName = (name) => dispatch(setName(name));
    const getSerName = (serName) => dispatch(setSerName(serName));
    const getMail = (mail) => dispatch(setMail(mail))
    const nick = useSelector(state => state.profile.nickName);
    const name = useSelector(state => state.profile.name);
    const serName = useSelector(state => state.profile.serName);
    const sex = useSelector(state => state.profile.sex);
    const state = useSelector(state=> state.profile)
    // console.log(state);

// валидация
    const {handleSubmit,register, formState: { errors,isValid  } } = useForm({
        defaultValues: {
            nick:  nick,
            name: name,
            serName: serName,
            },
    mode: 'onTouched'});
    const onSubmit = (data) => {
        console.log(data);
        getNick(data.nick)
        getName(data.name)
        getSerName(data.serName)
        getMail(data.sex)
        setTab(tab+1)
      };
console.log(errors);
    //   console.log(errors);
    return ( 
        <>
        <form onSubmit={handleSubmit(onSubmit)} >
            <span>Nick name</span>
            <input type="text" 
            {...register("nick", {
            required: 'Enter Nick',
            pattern: {value: /^[A-Za-zА-Яа-я0-9]+$/, message: "только буквы" },
            maxLength: {value: 30 , message:"менее 30 сиволов"}


            // maxLength:{ //     value: 50, //     message: "максимум 50 символов"// }
            }
            )}
            />
            {errors.nick && (
                <p className="errorMsg">{errors.nick.message}</p>
            )}

            <p>Tip</p>

            <span>Name</span>
            <input type="text" 
            {...register("name", {
                required: 'Enter name',
                pattern: {value: /^[A-Za-zА-Яа-я]+$/, message: "только буквы" },
                maxLength: {value: 50 , message:"менее 50 сиволов"}
                }
                )}
                />
                {errors.name && (
                    <p className="errorMsg">{errors.name.message}</p>
                )}
        

            <span>Sername</span>
            <input type="text" onFocus={(e)=>{e.target.value = ""}}
            {...register("serName", {
                required: 'Enter sername',
                pattern: {value: /^[A-Za-zА-Яа-я]+$/, message: "только буквы" },
                maxLength: {value: 50 , message:"менее 50 сиволов"}
                }
                )}
                />
                {errors.sername && (
                    <p className="errorMsg">{errors.sername.message}</p>
                )}
            {/* <Input value={serName} func={getSerName}/> */}

            <span>Sex</span>
            <select 
            // name="sex"
            defaultValue={sex} 
            id="field-sex" 
            placeholder='не выбрано'
            {...register('sex', {
                required: 'Enter sex',
            })
            
            }
                // onChange={(e) => {getMail(e.target.value)}}
                >
                <option disabled value="">не выбрано</option>
                <option id="field-sex-option-man" value="man">man</option>
                <option id="field-sex-option-woman" value="woman">woman</option>
            </select>

            <button  id="button-back" className='btn btn_back' onClick={()=>{navigate('/');}}>Назад
                </button>
                <button disabled={!isValid} id="button-next" className='btn'>Вперед
                </button>
        </form>
        </>
        
     );
}

export default tab1;