import { Link } from 'react-router-dom'
import shoppingCart from '../assets/icons/shopping-cart.png'
import { useCart } from '../components/cartContext'

export const ShoppingCart = () => {

  const { cartItems } = useCart()

  return (
    <>
      <Link to = '/sell_products'>
        { cartItems.length === 0 
        ?
          <img src={ shoppingCart } alt='shopping-Cart' className='shoppingCart'></img>
        :
          <span> { cartItems.length } </span>
        }
      </Link>
    </>
  )
}
