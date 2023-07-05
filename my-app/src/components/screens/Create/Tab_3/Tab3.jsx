import React, { useEffect, useState } from 'react';
import s from './Tab3.module.css'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { setAbout } from '../../../toolkitRedux/toolkitSlice';
import Modal from '../../../ui/modal/Modal';



function Tab3({tab,setTab}) {
    const [formSubmitted,setform] = useState(false);
    const [formStatus,setErr] = useState(false);
    const dispatch = useDispatch();
    const {aboutInp} = useSelector(state => state.toolkit);
    const state = useSelector(state => state.toolkit);
    const { handleSubmit, register,watch, formState: { errors, isValid } } = useForm({
        defaultValues: {
            aboutInp: aboutInp,
        },
        mode: 'all'
    });
    const onSubmit = (data) => {
        dispatch(setAbout(data.aboutInp))
        Myrequest(state)
    }
    let Myrequest = async (state)=> {
        try {
            console.log('Sending request with data:', state);
        const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(state)
            
        });
        if (response.ok) {
            setform(true)
          } else {
            setErr(true);
            console.error('Failed to submit form data');
          }
        } 
        catch (error) {
            setErr = true;
          console.error('An error occurred while submitting form data', error);
        }
    }
    
    let count = watch('aboutInp')?watch('aboutInp').length : null;

    return ( <form onSubmit={handleSubmit(onSubmit)}>
                <span>About</span>
                <textarea 
                {...register('aboutInp',{
                    required: "Поле обязательно к заполнению",
                    maxLength: {
                        value: 200,
                        message: "максимум 200 символов"
                    }
                })}
                className={s.textarea}
                // id=""
                placeholder='placeholder'>
                </textarea>
                {count ? <p>вы ввели {count} символов</p>: null}
                {errors.aboutInp && <p>{errors.aboutInp.message}</p>}
                {/* {formSubmitted && <p> форма успешно отправлена</p>} */}
                {formSubmitted && <Modal formSubmitted={formSubmitted} formStatus={formStatus} setform={setform} />}
                <p>Tip</p>
                <button id="button-back" className='btn btn_back' onClick={() => { setTab(tab - 1) }}>Назад</button>
        <button 
        disabled={!isValid}
         id="button-next" 
         className='btn'
         >Вперед
         </button>
            </form>
             );
             
}

export default Tab3;