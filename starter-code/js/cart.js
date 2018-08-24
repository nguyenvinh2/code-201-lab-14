/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart.items.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  for (var i = 0; i < cart.items.items.length; i ++) {

    var tableItem1 = document.createElement('TD');
    var tableItem2 = document.createElement('TD');
    var tableItem3 = document.createElement('TD');

    tableItem1.textContent = 'X';
    tableItem2.textContent = cart.items.items[i].product;
    tableItem3.textContent = cart.items.items[i].quantity;

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

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
