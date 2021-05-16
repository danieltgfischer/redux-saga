export type Product = {
  id: number;
  title: string;
  price: number;
}

export type CartItem = {
  product: Product;
  quantity: number;
}
export interface ICartState {
  items: CartItem[]
}