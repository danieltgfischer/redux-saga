import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { ICartState } from './module/cart/types';
import rootReducer from './module/rootReducer';
export interface IState {
  cart: ICartState;
}
const store = createStore(rootReducer, composeWithDevTools())

export default store;
