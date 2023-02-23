let cart = [];
let cartTotal = 0;
const cartElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const storeElement = document.getElementById('store');
const addToCartButtons = storeElement.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    addToCart(name, price);
  });
});
function addToCart(name, price) {
  const item = {
    name,
    price
  };
  cart.push(item);
  cartTotal += price;
  updateCart();
}
function updateCart() {
  cartElement.innerHTML = '';
  cart.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartElement.appendChild(itemElement);
  });
  cartTotalElement.innerText = cartTotal.toFixed(2);
}