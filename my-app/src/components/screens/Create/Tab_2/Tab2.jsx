import React, {useEffect,useCallback} from 'react';
import s from "./tab2.module.css";
import { useForm, useFieldArray } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux'
// import { setADV, setCheck, setRadio,} from '../../../redux/actions.js';
import { setADV, setCheck, setRadio,} from '../../../toolkitRedux/toolkitSlice';

// import logo from "../../../../../public/icons/delete.svg";

function Tab2({ tab, setTab,widthSet }) {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.toolkit)
    const {advantages,radiobox,checkbox} = useSelector(state => state.toolkit);

    console.log('render');
    console.log(state);
 const CheckBoxArr =[1,2,3];
 const RadioArr =[1,2,3];
 const { handleSubmit, register, control, formState: { errors, isValid } } = useForm({
    defaultValues: {
      advantages: advantages,
      checkbox: checkbox, // Add default value for checkbox array
      radiobox: radiobox
    },
    mode: 'onTouched'
});

const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages' // Name of the array field
  });

  const onSubmit = (data) => {
    dispatch(setADV(data.advantages));
    dispatch(setCheck(data.checkbox));
    dispatch(setRadio(data.radiobox));
    widthSet(2)
    setTab(tab+1)
  };

  const addInput  = () => append({ value: '' });
  const delInp = (index) => remove(index);

  let handleBackClick = (e)=>{ 
    e.preventDefault();
    setTab(tab - 1) ;
  }
  
  return (
    <>
      <span>Advantages</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={item.id}>
            <input
              {...register(`advantages.${index}.value`, { required: 'advantage option required' })}
              id={`field-advantages-${index + 1}`}
              type="text"
            />
            <img
              id={`button-remove-${index + 1}`}
              onClick={()=>delInp(index)}
              className={s.img}
              src='icons/delete.svg'
              alt="Remove"
            />
            {errors.advantages && errors.advantages[index] && (
              <p className="errorMsg">{errors.advantages[index].value.message}</p>
            )}
          </div>
        ))}

        <button
          onClick={addInput}
          to="/auth"
          id="button-add"
          className={s.addBtn}
        >
          +
        </button>

        <span>Checkbox group</span>
        {CheckBoxArr.map((item,index) => { 
        return <label key={index}>
                    <input
                    {...register(`checkbox`,{
                    required: "Необходимо выбрать"
                    })}
                    value={item}
                    key={index} 
                    id={`field-checkbox-group-option-${index}`} 
                    type="checkbox" />{item}
                </label>})}
                    {errors.checkbox && <p>{errors.checkbox.message} </p>}

        <span>Radio group</span>
        {RadioArr.map((item,index) => { return <label key={index}>
          <input
          {...register('radiobox',{
            required: "Необходимо выбрать"
          })}
          key={index} 
          value={item}
          id={`field-radio-group-option-${index}`}
           type="radio"/> {item}
        </label>})}

        <button id="button-back" className='btn btn_back' onClick={(e) => {handleBackClick(e)}}>Назад</button>
        <button disabled={!isValid} id="button-next" className='btn' >Вперед</button>
      </form>
    </>
  );
}

export default Tab2;
