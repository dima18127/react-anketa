// import { PHONE, EMAIL, NICK, NAME, SERNAME, SEX,ADVANTAGES,CHECKBOX,RADIOBOX } from './types.js'

// const defaultState = {
//     phone: '89179824659',
//     email: 'dima18127@yandex.ru',
//     nick: 'dima18127',
//     name: 'Дмитрий',
//     serName:'Макаров',
//     sex: '',
//     advantages: [{ value: "asd", focus: "true" }],
//     checkbox: ['2'],
//     radiobox: '3',

//   }
// export const profileReducer  = (state = defaultState, action)=>{
//         switch (action.type) {
//           case EMAIL: return {
//              ...state, email:  action.email
//           }
//           case PHONE: return {
//             ...state, phone:  action.phone
//          }
//           case NICK: return {
//             ...state, nick:  action.nick
//          }
//           case NAME: return {
//             ...state, name:  action.name
//          }
//           case SERNAME: return {
//             ...state, serName:  action.serName
//          }
//           case SEX: return {
//             ...state, sex:  action.sex
//          }
//          case ADVANTAGES: return {
//          ...state, advantages:  action.advantages
//          }
//          case CHECKBOX: return {
//          ...state, checkbox:  action.checkbox
//          }
//          case RADIOBOX: return {
//          ...state, radiobox:  action.radiobox
//          }
         
//           default: return state
//         }
//       }
