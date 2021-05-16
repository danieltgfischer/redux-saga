import { createStore } from 'redux';
import { ICartState } from './module/cart/types';
import rootReducer from './module/rootReducer';
export interface IState {
  cart: ICartState;
}
const store = createStore(rootReducer)

export default store;
