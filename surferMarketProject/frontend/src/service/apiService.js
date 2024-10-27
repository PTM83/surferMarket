
export async function fetchData(endPoint, options = {}) {
  
  // const url = '../public/data/surferMarketData.json'
  // Descarga productos

   const url = 'https://surfermarketbackend.onrender.com' + endPoint

  const response = await fetch(url, options);

  if(!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json();
  return data
}