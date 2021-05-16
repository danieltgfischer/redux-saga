import { useSelector } from "react-redux"
import { CartItem } from "../store/module/cart/types"
import { IState } from "../store"

const Cart: React.FC = () => {
  const cart = useSelector<IState, CartItem[]>(state => state.cart.items)
  return (
    <table>
      <thead>
        <tr>
          <th>Produtos</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.quantity * item.product.price).toFixed(2)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Cart