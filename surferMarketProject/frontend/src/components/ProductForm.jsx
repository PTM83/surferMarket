import { useState } from 'react';
import { SurferHeader } from '../components/SurferHeader';
import NavigationButtons from '../components/NavigationButtons';
import '../App.css'; // Asegúrate de importar tu archivo de estilos

const ProductForm = ({ onAddProduct, carrito = [], sumaTotal = 0, formatPrice, incrementar, decrementar, handleVolverClick }) => {
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

      <nav className="navbar navbar-light bg-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="navbar-brand mb-0 h1 text-white" style={{ marginLeft: '80px' }}>🍕 Pizzeria Mamma Mia!</span>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '80px' }}>
          <p className="volver-btn" onClick={handleVolverClick} style={{ cursor: 'pointer', margin: 0, padding: 2 }}>Inicio</p>
        </div>
      </nav>

      <div className="d-flex flex-column align-items-center">
        <div style={{ width: '80%', marginTop: '40px' }}>
          <h5>Detalle del pedido</h5>
          <hr />
        </div>
        {carrito &&
          carrito.map((producto, index) => (
            <div key={producto.id} className="d-flex justify-content-between align-items-center" style={{ width: '80%', margin: '20px auto' }}>
              <div className="d-flex align-items-center">
                <img src={producto.img} width={100} alt={producto.name} />
                <h3 style={{ marginLeft: '20px' }}>{producto.name}</h3>
              </div>
              <div className="d-flex align-items-center">
                <span style={{ marginRight: '20px', fontSize: '20px' }}>Precio: ${formatPrice(producto.count * producto.price)}</span>
                <div className="d-flex align-items-center">
                  <button className="btn btn-info btn-sm custom-btn mr-2" onClick={() => decrementar(index)}>-</button>
                  <span className="mx-2" style={{ fontSize: '20px' }}>{producto.count}</span>
                  <button className="btn btn-danger btn-sm custom-btn ml-2" onClick={() => incrementar(index)}>+</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <hr style={{ width: '80%', margin: '20px auto' }} />
      <div style={{ width: '80%', margin: '20px auto', textAlign: 'left' }}>
        <h1 style={{ fontSize: '5vh' }}>Total: ${formatPrice(sumaTotal)}</h1>
        <button className="btn btn-success" onClick={() => console.log("Pagar")}>Pagar</button>
      </div>
    </>
  );
};

export default ProductForm;
