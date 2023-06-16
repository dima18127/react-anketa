import { PHONE, EMAIL, NICK } from './types.js'

export function addEmail(email){
    return {
        type: EMAIL,
        email
    }
  }
export function addPhone(phone){
    return {
        type: PHONE,
        phone
    }
  }
export function setNick(nick){
    return {
        type: NICK,
        nick
    }
  }