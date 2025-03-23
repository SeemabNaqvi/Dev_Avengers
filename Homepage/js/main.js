document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products-container');
  const trendingProductsContainer = document.getElementById('trending-products-container');
  const highlightedProductContainer = document.getElementById('highlighted-product');
  const featuredProduct1 = document.getElementById('featured-product-1');
  const featuredProduct2 = document.getElementById('featured-product-2');
  const featuredProduct3 = document.getElementById('featured-product-3');
  const cartIcon = document.querySelector('.nav-icons span:nth-child(2)');
  const profileIcon = document.querySelector('.nav-icons span:nth-child(3)');
  const searchInput = document.querySelector('.search');
  const loginModal = document.getElementById('login-modal');
  const closeModalButton = document.querySelector('.close');
  const cart = [];
  let products = []; // Define products array outside the fetch call

  // Fetch products from the API
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      products = data.products; // Populate the products array

      // Inject products into the container
      displayProducts(products, trendingProductsContainer);

      // Start the sliding animation for the highlighted product
      let currentIndex = 0;
      setInterval(() => {
        const product = products[currentIndex];
        const highlightedProductDiv = document.createElement('div');
        highlightedProductDiv.classList.add('product', 'active');
        highlightedProductDiv.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="product-info">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;

        // Clear previous highlighted product
        highlightedProductContainer.innerHTML = '';
        highlightedProductContainer.appendChild(highlightedProductDiv);

        // Update index for next product
        currentIndex = (currentIndex + 1) % products.length;
      }, 3000); // Change product every 3 seconds

      // Inject featured products
      injectFeaturedProduct(products[0], featuredProduct1);
      injectFeaturedProduct(products[1], featuredProduct2);
      injectFeaturedProduct(products[2], featuredProduct3);
    })
    .catch(error => console.error('Error fetching products:', error));

  // Function to display products
  function displayProducts(products, container) {
    container.innerHTML = ''; // Clear previous products
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <img src="${product.thumbnail}" alt="${product.title}" style="width: 100px; height: 100px;">
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productDiv.addEventListener('click', () => viewProductDetails(product));
      container.appendChild(productDiv);
    });
  }

  // Function to inject featured product
  function injectFeaturedProduct(product, container) {
    container.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Shop Now</button>
      </div>
    `;
  }

  // Function to add product to cart
  window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      showNotification(`${product.title} has been added to the cart.`);
      console.log('Cart:', cart);
    }
  };

  // Function to view cart contents
  cartIcon.addEventListener('click', () => {
    const cartModal = document.createElement('div');
    cartModal.classList.add('cart-modal');
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    cartModal.innerHTML = `
      <div class="cart-modal-content">
        <h2>Cart</h2>
        <ul>
          ${cart.map((item, index) => `
            <li>
              <img src="${item.thumbnail}" alt="${item.title}" class="cart-item-image">
              <div class="cart-item-info">
                <p>${item.title}</p>
                <p>Price: $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
              </div>
            </li>
          `).join('')}
        </ul>
        <p>Total Price: $${totalPrice}</p>
        <button onclick="proceedToPayment()">Proceed to Payment</button>
        <button onclick="closeCart()">Continue Shopping</button>
      </div>
    `;
    document.body.appendChild(cartModal);
  });

  // Function to remove product from cart
  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    closeCart();
    cartIcon.click();
  };

  // Function to proceed to payment
  window.proceedToPayment = function() {
    alert('Proceeding to payment...');
    closeCart();
  };

  // Function to close cart
  window.closeCart = function() {
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal) {
      cartModal.remove();
    }
  };

  // Function to show notification
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000); // Remove notification after 3 seconds
  }

  // Function to view product details
  function viewProductDetails(product) {
    // Create a modal or a new section to display product details
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    productDetails.innerHTML = `
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <img src="${product.thumbnail}" alt="${product.title}" style="width: 200px; height: 200px;">
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="closeProductDetails()">Close</button>
    `;

    // Append the product details to the body or a specific container
    document.body.appendChild(productDetails);
  }

  // Function to close product details
  window.closeProductDetails = function() {
    const productDetails = document.querySelector('.product-details');
    if (productDetails) {
      productDetails.remove();
    }
  }

  // Function to handle search
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const query = searchInput.value;
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
          const searchResults = data.products;
          displayProducts(searchResults, productsContainer);
        })
        .catch(error => console.error('Error fetching search results:', error));
    }
  });

  // Function to handle category search
  window.searchByCategory = function(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => {
        const categoryResults = data.products;
        displayProducts(categoryResults, productsContainer);
      })
      .catch(error => console.error('Error fetching category results:', error));
  }

  // Function to sort products
  window.sortProducts = function(sortBy, order) {
    fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`)
      .then(response => response.json())
      .then(data => {
        const sortedProducts = data.products;
        displayProducts(sortedProducts, productsContainer);
      })
      .catch(error => console.error('Error fetching sorted products:', error));
  }

  // Function to get a single product
  window.getProduct = function(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        const product = data;
        viewProductDetails(product);
      })
      .catch(error => console.error('Error fetching product:', error));
  }

  // Function to open login modal
  profileIcon.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
});

