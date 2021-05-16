import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { addProductToCart } from '../store/module/cart/actions';
import { Product } from '../store/module/cart/types';

export default function Catalog() {
  const [catalog, setCatalog] = useState<Product[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data))
  }, [])

  const handleAddProductToCart = useCallback(product => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <main>
      <h1>Catalog</h1>
      {
        catalog.map(product =>
          <article key={product.id}>
            <strong>{product.title}</strong> {'-'}
            <span> {product.price}</span> {' '}
            <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
          </article>
        )
      }
    </main>
  )
}