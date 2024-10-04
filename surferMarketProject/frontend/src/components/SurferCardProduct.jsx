import { useProducts } from '../Hooks/useProducts'
import { useCart } from '../Hooks/cartContext';

export const SurferCardProduct = () => {

  const { products, loading, error } = useProducts();
  const { handleAddToCart } = useCart();

  if(loading) return <div className='content-container'>Loading...</div>

  if(error) return <div className='content-container'>Error: {error}</div>
  
  return (
    <>
      <section className='surfer-product-card-container'>
        
        { products.map((product) => (
          <div key={product.id} className='product-card'>
            <header className='header-product-card'>
              <h1> {product.brand} </h1>
            </header>

            <img src= {product.image}
                alt= '' 
                className='image-product-card' />

            <p className='description-product-card'>
            {product.description}
            </p>
            <hr/>
            <footer className='footer-product-card'>
              <span> Precio: <b>$ {product.price.toLocaleString('es-ES')}</b> </span>
              <button onClick={() => handleAddToCart(product)} className='footer-button'> Comprar Ahora </button>
            </footer>
          </div>
        ))}

      </section>
    </>
  )
}
