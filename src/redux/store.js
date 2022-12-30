//Esse arquivo é a base do redux

import { createStore, applyMiddleware } from 'redux' //Ele está deprecated porque o recomendado é usar o redux toolkit
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const store = createStore(rootReducer, applyMiddleware(logger)) // O store é o que armazena o root reducer, ou seja, armazena o estado 

export default store