import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/module/cart/actions';
import { Product } from '../store/module/cart/types';

interface ICatalogItem {
  product: Product
}

export function CatalogItem({ product }: ICatalogItem) {
  const dispatch = useDispatch()
  const handleAddProductToCart = useCallback(product => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch])
  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })
  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {'-'}
      <span> {product.price}</span> {' '}
      <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
      {hasFailedStockCheck && <span> Falta de estoque!</span>}
    </article>
  )
}