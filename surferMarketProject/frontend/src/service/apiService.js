
export async function fetchProducts() {
  
  const url = '../public/data/surferMarketData.json'
  
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json();
  return data
}