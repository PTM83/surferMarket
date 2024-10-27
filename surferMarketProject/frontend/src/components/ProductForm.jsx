// import { useState } from 'react';
// import { SurferHeader } from '../components/SurferHeader';
// import NavigationButtons from '../components/NavigationButtons';
// import '../App.css' // Asegúrate de importar tu archivo de estilos

import NavigationButtons from "./NavigationButtons"
import { SurferFooter } from "./SurferFooter"
import { SurferHeader } from "./SurferHeader"
import { useCart } from '../components/cartContext'

// const ProductForm = ({ onAddProduct }) => {
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productImage, setProductImage] = useState(null); // Cambiado a null por defecto

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validar que todos los campos estén completos
//     if (!productName || !productPrice || !productDescription || !productImage) {
//       alert('Por favor, completa todos los campos.');
//       return;
//     }

//     // Crear el objeto del producto
//     const newProduct = {
//       name: productName,
//       price: productPrice,
//       description: productDescription,
//       image: URL.createObjectURL(productImage) // Crear una URL para mostrar la imagen
//     };

//     // Pasar el producto al componente padre
//     onAddProduct(newProduct);

//     // Limpiar los campos del formulario
//     setProductName('');
//     setProductPrice('');
//     setProductDescription('');
//     setProductImage(null); // Restablecer a null
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Obtener el primer archivo seleccionado
//     if (file) {
//       setProductImage(file);
//     }
//   };

//   return (
//     <>
//       <SurferHeader />
//       <NavigationButtons />

//       <div className="form-container">
//         <form 
//           onSubmit={handleSubmit} 
//           className="product-form">
          
//           <h2>Agregar Producto</h2>
          
          
//           <label>
//             Nombre del Producto:
//             <input
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               placeholder="Ingresa el nombre del producto"
//               required
//             />
//           </label>
          
//           <label>
//             Precio del Producto:
//             <input
//               type="number"
//               value={productPrice}
//               onChange={(e) => setProductPrice(e.target.value)}
//               placeholder="Ingresa el precio del producto"
//               required
//             />
//           </label>
          
//           <label>
//             Descripción del Producto:
//             <textarea
//               value={productDescription}
//               onChange={(e) => setProductDescription(e.target.value)}
//               placeholder="Describe el producto"
//               required
//             />
//           </label>
          
//           <label>
//             Imagen del Producto:
//             <input
//               type="file"
//               accept="image/*" // Aceptar solo imágenes
//               onChange={handleImageChange}
//               required
//             />
//           </label>
          
//           <button type="submit" className="submit-button">
//             Agregar Producto
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ProductForm;


export const ProductForm = () => {

  const { cartItems } = useCart()

  return (
    <>
    <SurferHeader />

    <NavigationButtons />
      <h1>ProductForm { cartItems.length }</h1>
    <section className='shopping-cart-container'>

      {
        cartItems.length > 0 
        ? 
        
        <ul className="shopping-cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="shopping-cart-item">
              <div className="item-info">
                <img src={item.image_url} alt={item.name} className="item-image" />
                <span className="item-name"> Nombre del producto: {item.name}</span>
                <span className="item-name"> Precio del producto: ${parseFloat(item.price).toLocaleString('es-Es')}</span>
                <button className="remove-button">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>

        :
        <h2>No hay elementos por mostrar</h2>
      }

    </section>

    <SurferFooter />
    </>
  )
}

