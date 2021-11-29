import {combineReducers} from 'redux'
import authReducer from './authReducer'
import clientReducer from './clientReducer'
import produitReducer from './produitReducer'
import fournisseurReducer from './fournisseurReducer'
import commandeReducer from './commandeReducer'

export default combineReducers({authReducer,clientReducer,produitReducer,fournisseurReducer,commandeReducer,})
