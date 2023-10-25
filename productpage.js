const products = [
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
    {
      name: "ColorFit Plus",
      imageSrc: "https://www.gonoise.com/cdn/shop/products/Side02_360x.png?v=1672316134",
      price: "$99.99",
    },
  ];

  // Function to generate product cards
function generateProductCards() {
    const productContainer = document.querySelector('.watchcontainer1');
  
    // Loop through the products array
    for (const product of products) {
      // Create a product card container
      const card = document.createElement('div');
      card.classList.add('watch1-container');
  
      // Create an image element
      const img = document.createElement('img');
      img.src = product.imageSrc;
      img.alt = product.name;
  
      // Create a paragraph for product name
      const productName = document.createElement('p');
      productName.textContent = product.name;
  
      // Create buttons
      const addToCartButton = document.createElement('button');
      addToCartButton.classList.add('cart-button');
      addToCartButton.textContent = 'Add to Cart';
  
      const buyNowButton = document.createElement('button');
      buyNowButton.classList.add('buy-button');
      buyNowButton.textContent = 'Buy Now';
  
      // Append elements to the product card container
      card.appendChild(img);
      card.appendChild(productName);
      card.appendChild(addToCartButton);
      card.appendChild(buyNowButton);
  
      // Append the product card to the product container
      productContainer.appendChild(card);
    }
  }
  
  // Call the function to generate product cards when the page loads
  window.addEventListener('load', generateProductCards);
  