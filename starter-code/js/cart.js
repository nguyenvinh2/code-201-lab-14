/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

alert('Click on the Item to show the Image. Click on the X on the Item Row to Remove It.')

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart'));
  cart = new Cart(cartItems);
  cart.items = cart.items.items;
  console.log(cart.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  var tableRow = table.getElementsByTagName('TR')
  console.log(tableRow.length);

  for (var i = tableRow.length - 1; i > 0; i--) {
    table.removeChild(tableRow[i]);
  }


  console.log(cart.items.length);

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  for (var i = 0; i < cart.items.length; i++) {

    var tableItem1 = document.createElement('TD');
    var tableItem2 = document.createElement('TD');
    var tableItem3 = document.createElement('TD');

    tableItem1.textContent = 'X';
    tableItem3.textContent = cart.items[i].product;
    tableItem2.textContent = cart.items[i].quantity;

    var tableRow = document.createElement('TR');

    tableRow.appendChild(tableItem1);
    tableRow.appendChild(tableItem2);
    tableRow.appendChild(tableItem3);

    table.appendChild(tableRow);


  }

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  var tableImage = document.createElement('TR');
  var imageEl = document.createElement('IMG');
  var tableTD = document.createElement('TD');

  if (event.target.textContent === 'X' && event.target.parentNode.rowIndex > 0) {
    cart.removeItem(parseInt(event.target.parentNode.rowIndex - 1));
    cart.saveToLocalStorage();
    renderCart();
    alert(`Your Item has been removed from the Cart.`);
  }

  if (event.target.parentNode.rowIndex > 0) {
    for (var i = 0; i < Product.allProducts.length; i++) {
      if (event.target.textContent ===  Product.allProducts[i].name) {
        imageEl.src = Product.allProducts[i].filePath;
        renderCart();
        tableImage.appendChild(imageEl);
        table.appendChild(tableImage);
       }
    }
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
