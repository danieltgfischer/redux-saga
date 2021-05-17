import { all, select, takeLatest, call, put } from 'redux-saga/effects';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { IState } from './../../index';
import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import { ActionTypes } from './types';

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>
interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;
  const currentQuantity: number = yield select((state: IState) => {
    return state
      .cart
      .items
      .find(item => item.product.id === product.id)
      ?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = (
    yield call(api.get, `stock/${product.id}`)
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id))
  }


}

export default all([
  takeLatest(ActionTypes.ADD_PRODUCT_TO_CART_REQUEST, checkProductStock)
])