import { PHONE, EMAIL, NICK } from './types.js'

const defaultState = {
    phone: '',
    email: '',
    nickName: '',
    name: '',
    sername:'',
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
          default: return state
        }
      }
