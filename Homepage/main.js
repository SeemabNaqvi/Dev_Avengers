const container = document.getElementById('products-container');

fetch('https://fakestoreapi.com/products?limit=8')
  .then((res) => res.json())
  .then((data) => {
    container.innerHTML = data.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-title">${product.title.slice(0, 40)}...</div>
        <div class="product-price">$${product.price}</div>
      </div>
    `).join('');
  })
  .catch(err => {
    container.innerHTML = `<p>Error loading products 😢</p>`;
    console.error(err);
  });
