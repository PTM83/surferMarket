import { Link } from 'react-router-dom'
import shoppingCart from '../assets/icons/shopping-cart.png'

export const ShoppingCart = () => {
  return (
    <>
      <Link to = '/testView'>
        <img src={ shoppingCart } alt='shopping-Cart' className='shoppingCart'></img>
      </Link>
    </>
  )
}
