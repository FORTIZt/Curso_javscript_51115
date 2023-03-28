let cart = [];
let cartTotal = 0;
const cartElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const storeElement = document.getElementById('store');
const addToCartButtons = storeElement.querySelectorAll('.add-to-cart');

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartTotal', cartTotal);
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  const savedCartTotal = localStorage.getItem('cartTotal');
  if (savedCart && savedCartTotal) {
    cart = JSON.parse(savedCart);
    cartTotal = parseFloat(savedCartTotal);
    updateCart();
  }
}

function removeFromCart(index) {
  cartTotal -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
  saveCart(); 
}

loadCart();

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
  saveCart();
}

function updateCart() {
  cartElement.innerHTML = '';
  cart.forEach((item, index) => {
    const itemElement = document.createElement('li');
    itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Eliminar';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });
    itemElement.appendChild(removeButton);
    
    cartElement.appendChild(itemElement);
  });
  cartTotalElement.innerText = cartTotal.toFixed(2);
}