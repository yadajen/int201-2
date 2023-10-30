function ProductManagement() {
  //add products variable here
  const arr = []
  function getAllProducts() {
    return arr
  }

  function addProduct(product) {
    arr.push(product)
  }

  function searchByName(name) {
    return arr.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  function searchByPriceRange(minPrice, maxPrice) {
    let rangeprice = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].price >= minPrice && arr[i].price <= maxPrice) {
        rangeprice.push(arr[i])
      }
    }
    return rangeprice
  }

  function removeAll() {
    arr.splice(0, arr.length)
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct,
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()
