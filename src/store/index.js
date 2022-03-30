import  { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//reducer
import { shoppingCartReducer } from '../reducer'

export const store = createStore(shoppingCartReducer, applyMiddleware(thunk))
