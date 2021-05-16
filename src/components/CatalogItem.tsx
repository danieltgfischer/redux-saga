import {  useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/module/cart/actions';
import {  Product } from '../store/module/cart/types';

interface ICatalogItem {
  product: Product
}

export function CatalogItem({ product }: ICatalogItem) {
  const dispatch = useDispatch()
  const handleAddProductToCart = useCallback(product => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {'-'}
      <span> {product.price}</span> {' '}
      <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
    </article>
  )
}