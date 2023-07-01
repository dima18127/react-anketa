import React, { useState, useRef } from 'react';
import s from "./tab2.module.css";
import { useForm } from 'react-hook-form';

function Tab2({ tab, setTab }) {
  let [count, setCount] = useState(3);
  let [adv, setAdv] = useState([1, 2, 3]);

  let addInp = () => {
    setCount(++count);
    setAdv([...adv, count]);
  };

  let delInp = (item) => {
    setAdv((adv) => adv.filter((item1) => item1 !== item));
  };

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {},
    mode: 'onTouched'
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <>
      <span>Advantages</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        {adv.map((item) => (
          <div key={item}>
            <input
              {...register(`adv${item}`, { required: 'adv req' })}
              id={`field-advantages-${item}`}
              type="text"
            />
            <img
              id={`button-remove-${item}`}
              onClick={() => delInp(item)}
              className={s.img}
              src="icons/delete.svg"
            />
            {errors[`adv${item}`] && (
              <p className="errorMsg">{errors[`adv${item}`].message}</p>
            )}
          </div>
        ))}
        {errors.adv && <p className="errorMsg">{errors.adv.message}</p>}

        <button onClick={addInp} to="/auth" id="button-add" className={s.addBtn}>+</button>

        <span>Checkbox group</span>
        <label>
          <input id="field-checkbox-group-option-1" type="checkbox" /> 1
        </label>
        <label>
          <input id="field-checkbox-group-option-2" type="checkbox" /> 2
        </label>
        <label>
          <input id="field-checkbox-group-option-3" type="checkbox" /> 3
        </label>
        <span>Radio group</span>
        <label>
          <input name='radio' id="field-radio-group-option-1" type="radio" value='1' /> 1
        </label>
        <label>
          <input name='radio' id="field-radio-group-option-2" type="radio" value='2' /> 2
        </label>
        <label>
          <input name='radio' id="field-radio-group-option-3" type="radio" value='3' /> 3
        </label>
        <button id="button-back" className='btn btn_back' onClick={() => { setTab(tab - 1) }}>Назад</button>
        <button id="button-next" className='btn' onClick={() => { setTab(tab + 1) }}>Вперед</button>
      </form>
    </>
  );
}

export default Tab2;
