// // import { configureStore } from '@reduxjs/toolkit'
// import {createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// // import { legacy_createStore as createStore } from "redux"
// const defaultState = {
//     phone: '',
//     email: '',
//     pass: '',
//   }
  
//   const reducer = (state = defaultState, action)=>{
//     switch (action.type) {
//       case "email": return {
//          ...state, email:  action.payload
//       }
//       case "phone": return {
//         ...state, phone:  action.payload
//      }
//       default: return state
//     }
//   }
  
  
//   const store = createStore(reducer, composeWithDevTools());

// export default store;