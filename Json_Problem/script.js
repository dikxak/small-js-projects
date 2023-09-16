'use strict';

let productData = [];
let productCategory = '';

const selectCategory = document.getElementById('select-category');
const productList = document.querySelector('.product-list');
const productDetailContainer = document.querySelector('.detail-container');

// Function to initialize product detail container
const initProductDetailContainer = () => {
  productDetailContainer.innerHTML =
    '<p class="user-msg">Start selecting products to view details.</p>';
};

// Function to initialize various components after app start
const init = () => {
  productList.innerHTML =
    '<li><p class="user-msg">Start selecting category to display products.</p></li>';

  renderCategories();
  initProductDetailContainer();
};

// Function to get data from JSON File.
const getProductData = async () => {
  try {
    const res = await fetch('./data.json');

    if (!res.ok) throw new Error('Error while fetching JSON data.');

    const data = await res.json();
    productData = data;

    console.log(productData);
  } catch (err) {
    console.error(err);
  }
};

// Function to render categories options
const renderCategories = async () => {
  await getProductData();

  selectCategory.innerHTML = '';

  const markup = productData
    .map((data, i) => {
      return data.type === 'category'
        ? `${
            i === 0
              ? '<option value="" disabled selected>Please choose category</option>'
              : ''
          } <option value="${data.name}">${data.name}</option>`
        : '';
    })
    .join('');

  selectCategory.insertAdjacentHTML('afterbegin', markup);
};

// Function to render products according to category
const renderProducts = productCategory => {
  const product = productData.find(
    data => data.type === 'category' && data.name === productCategory
  );

  productList.innerHTML = '';
  const markup = product.products
    .map(product => {
      return `<li class="product-item">
      <button class="btn">${
        product.type === 'product' ? product.name : ''
      }</button>
    </li>`;
    })
    .join('');
  productList.insertAdjacentHTML('afterbegin', markup);
};

// Function to render product detail
const renderProductDetail = productName => {
  const { products } = productData.find(
    data => data.type === 'category' && data.name === productCategory
  );

  const product = products.find(
    product => product.type === 'product' && product.name === productName
  );

  const markup = `<img class="product-img" src="${product.imageUrl}"
    alt="${product.name}"
    />
    <p class="product-text name">${product.name}</p>
    <p class="product-text category">${productCategory}</p>
    <p class="product-text price">Rs.${product.price}</p>`;

  productDetailContainer.innerHTML = '';
  productDetailContainer.insertAdjacentHTML('afterbegin', markup);
};

// Listening change on category
selectCategory.addEventListener('change', e => {
  renderProducts(e.target.value); // Electronics

  productCategory = e.target.value;
  initProductDetailContainer();
});

// Listening click on product items
productList.addEventListener('click', e => {
  if (!e.target.closest('.btn')) return;

  renderProductDetail(e.target.innerHTML);
});

// Call init function to initialize app
init();
