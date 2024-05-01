import React from 'react';
const products = [
  {
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 4.7,
    "discount": 63,
    "availability": "yes"
  },
  {
    "productName": "Laptop 13",
    "price": 1244,
    "rating": 4.5,
    "discount": 45,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 3",
    "price": 9102,
    "rating": 4.44,
    "discount": 98,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 11",
    "price": 2652,
    "rating": 4.12,
    "discount": 70,
    "availability": "yes"
  },
  {
    "productName": "Laptop 4",
    "price": 1258,
    "rating": 3.8,
    "discount": 33,
    "availability": "yes"
  },
  {
    "productName": "Laptop 13",
    "price": 8686,
    "rating": 3.22,
    "discount": 24,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 1",
    "price": 1059,
    "rating": 2.77,
    "discount": 21,
    "availability": "Yes"
  }
];

// Function to create product elements
function createProductElement(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const title = document.createElement('h2');
  title.textContent = product.productName;
  productDiv.appendChild(title);

  const price = document.createElement('p');
  price.textContent = `Price: $${product.price}`;
  productDiv.appendChild(price);

  const rating = document.createElement('p');
  rating.textContent = `Rating: ${product.rating}`;
  productDiv.appendChild(rating);

  const discount = document.createElement('p');
  discount.textContent = `Discount: ${product.discount}%`;
  productDiv.appendChild(discount);

  const availability = document.createElement('p');
  availability.textContent = `Availability: ${product.availability}`;
  productDiv.appendChild(availability);

  return productDiv;
}

document.addEventListener('DOMContentLoaded', function() {
  const productsContainer = document.getElementById('products');

  products.forEach(product => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
  });
});
