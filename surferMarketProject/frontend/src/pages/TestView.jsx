import { SurferHeader } from '../components/SurferHeader' 
import { SurferFooter } from '../components/SurferFooter'
import NavigationButtons from '../components/NavigationButtons'

export const TestView = () => {
  return (
    <>
      <SurferHeader />
      <NavigationButtons />
      <section className='content-container'>
        <h1>TestView</h1>
        {/* Formulario para agregar productos */}
        <form className="product-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price:</label>
            <input type="number" id="productPrice" name="productPrice" required />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Description:</label>
            <textarea id="productDescription" name="productDescription" required />
          </div>
          <button type="submit" className="submit-btn">Add Product</button>
        </form>
      </section>
      <SurferFooter />
    </>
  )
}

export default TestView;
