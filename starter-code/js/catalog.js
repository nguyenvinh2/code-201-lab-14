/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var selectElement = document.getElementById('items');
    var optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var quantity = document.getElementById('quantity').value;
  console.log(quantity);
  var items = document.getElementById('items').value;

  cart.addItem(items, quantity);
  alert('Your Item has been added to the Cart!')
  document.getElementById('catalog').reset();


  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  localStorage.cartCount = cart.items.length;
  var textThings = localStorage.cartCount;
  document.getElementById('itemCount').textContent = `${textThings} Items in Cart.`;

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var totalPreview = document.getElementById('cartContents');
  var previewList = document.createElement('OL');

  totalPreview.innerHTML = '';

  previewList.textContent = 'Preview List:'

  for (var i = 0; i < cart.items.length; i++) {
  var listLoop = document.createElement('LI');
  listLoop.textContent = `${cart.items[i].product}: ${cart.items[i].quantity}`;
  previewList.appendChild(listLoop);
  totalPreview.appendChild(previewList);
}

var link = document.createElement('A');
var linkText = document.createTextNode('THANKS FOR SUBMITTING. CLICK HERE TO GO TO CART');
link.appendChild(linkText);
link.href = 'cart.html';
previewList.appendChild(link);
totalPreview.appendChild(previewList);

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
