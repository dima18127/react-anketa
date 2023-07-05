import React  from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useForm} from "react-hook-form";
import { setMail, setName, setNick, setSerName } from '../../../toolkitRedux/toolkitReducer';



function Tab1({tab,setTab,widthSet}) {
    const Navigate = useNavigate();
    const Dispatch = useDispatch();
    const {nick,name,sername,sex} = useSelector(state => state.toolkit);


// валидация
    const {handleSubmit,register, formState: { errors,isValid  } } = useForm({
        defaultValues: {
            nick:  nick,
            name: name,
            sername: sername,
            },
    mode: 'onTouched'});
    const onSubmit = (data) => {
        Dispatch(setNick(data.nick))
        Dispatch(setName(data.name))
        Dispatch(setSerName(data.sername))
        Dispatch(setMail(data.sex))
        setTab(tab+1)
        widthSet(1) 
      };

    return ( 
        <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <span>Nick name</span>
            <input type="text" 
            {...register("nick", {
            required: 'Enter Nick',
            pattern: {value: /^[A-Za-zА-Яа-я0-9]+$/, message: "только буквы" },
            maxLength: {value: 30 , message:"менее 30 сиволов"}
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
            {...register("sername", {
                required: 'Enter sername',
                pattern: {value: /^[A-Za-zА-Яа-я]+$/, message: "только буквы" },
                maxLength: {value: 50 , message:"менее 50 сиволов"}
                }
                )}
                />
                {errors.sername && (
                    <p className="errorMsg">{errors.sername.message}</p>
                )}

            <span>Sex</span>
            <select 
            defaultValue={sex} 
            id="field-sex" 
            placeholder='не выбрано'
            {...register('sex', {
                required: 'Enter sex',
            })}
            >
                <option disabled value="">не выбрано</option>
                <option id="field-sex-option-man" value="man">man</option>
                <option id="field-sex-option-woman" value="woman">woman</option>
            </select>

            <button  id="button-back" className='btn btn_back' onClick={()=>{Navigate('/');}}>Назад</button>
            <button disabled={!isValid} id="button-next" className='btn'>Вперед
            </button>
        </form>
        </div>
        
     );
}

export default Tab1;