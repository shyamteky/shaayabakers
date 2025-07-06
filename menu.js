 // ✅ Load existing cart or create empty
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // ✅ Add to cart and save to localStorage
  function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
  }