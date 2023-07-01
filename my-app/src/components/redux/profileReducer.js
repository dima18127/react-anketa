import { PHONE, EMAIL, NICK, NAME, SERNAME, SEX } from './types.js'

const defaultState = {
    phone: '89179824659',
    email: 'dima18127@yandex.ru',
    nickName: 'dima18127',
    name: 'Дмитрий',
    serName:'Макаров',
    sex: ''

  }
export const profileReducer  = (state = defaultState, action)=>{
        switch (action.type) {
          case EMAIL: return {
             ...state, email:  action.email
          }
          case PHONE: return {
            ...state, phone:  action.phone
         }
          case NICK: return {
            ...state, nickName:  action.nick
         }
          case NAME: return {
            ...state, name:  action.name
         }
          case SERNAME: return {
            ...state, serName:  action.serName
         }
          case SEX: return {
            ...state, sex:  action.sex
         }
          default: return state
        }
      }
