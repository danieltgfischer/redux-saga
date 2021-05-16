import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { Product } from '../store/module/cart/types';
import { CatalogItem } from './CatalogItem';

export default function Catalog() {
  const [catalog, setCatalog] = useState<Product[]>([])

  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data))
  }, [])

  return (
    <main>
      <h1>Catalog</h1>
      {
        catalog.map(product =>
          <CatalogItem key={product.id} product={product} />
        )
      }
    </main>
  )
}