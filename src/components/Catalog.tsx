import { useSelector } from 'react-redux';

export default function Catalog() {
  const state = useSelector(state => state)
  console.log(state);
  return <div>
    hello world
  </div>
}