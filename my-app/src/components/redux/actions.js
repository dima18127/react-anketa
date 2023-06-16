import { PHONE, EMAIL, NICK, NAME, SERNAME, SEX } from './types.js';

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
export function setName(name){
    return {
        type: NAME,
        name
    }
  }
export function setSerName(serName){
    return {
        type: SERNAME,
        serName
    }
  }
export function setMail(sex){
    return {
        type: SEX,
        sex
    }
  }