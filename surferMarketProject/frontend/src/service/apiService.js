
export async function fetchProducts(endPoint) {
  
  // const url = '../public/data/surferMarketData.json'
  // Descarga productos

   const url = 'http://localhost:3000' + endPoint

  const response = await fetch(url);

  if(!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json();
  return data
}