import { useState } from 'react';
import { SurferHeader } from '../components/SurferHeader';
import NavigationButtons from '../components/NavigationButtons';
import '../App.css'; // Asegúrate de importar tu archivo de estilos

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null); // Cambiado a null por defecto

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (!productName || !productPrice || !productDescription || !productImage) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear el objeto del producto
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: URL.createObjectURL(productImage) // Crear una URL para mostrar la imagen
    };

    // Pasar el producto al componente padre
    onAddProduct(newProduct);

    // Limpiar los campos del formulario
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage(null); // Restablecer a null
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Obtener el primer archivo seleccionado
    if (file) {
      setProductImage(file);
    }
  };

  return (
    <>
      <SurferHeader />
      <NavigationButtons />

      <div className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <h2>Agregar Producto</h2>

          <label>
            Nombre del Producto:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Ingresa el nombre del producto"
              required
            />
          </label>

          <label>
            Precio del Producto:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Ingresa el precio del producto"
              required
            />
          </label>

          <label>
            Descripción del Producto:
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Describe el producto"
              required
            />
          </label>

          <label>
            Imagen del Producto:
            <input
              type="file"
              accept="image/*" // Aceptar solo imágenes
              onChange={handleImageChange}
              required
            />
          </label>

          <button type="submit" className="submit-button">
            Agregar Producto
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
