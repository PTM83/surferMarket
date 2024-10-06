
var surferTable = [];

export function addToCart(product) {
  surferTable.push(product)
  return surferTable
}

export function getCartItems() {
  return surferTable
}

export function removeFromCart(productId) {
  surferTable = surferTable.filter((item) => item.id !== productId)

  return surferTable
}