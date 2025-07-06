 let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    }

    function displayCart() {
      const cartDiv = document.getElementById("cart");
      if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your Cart Is Empty</p>";
        return;
      }

      let total = 0;
      let html = "<ul>";
      cart.forEach((item, index) => {
        total += item.price;
        html += `<li>${item.product} - ₹${item.price}
          <button onclick="removeItem(${index})">Remove</button></li>`;
      });
      html += "</ul>";
      html += `<h3>Total: ₹${total}</h3>`;
      cartDiv.innerHTML = html;
    }

    function placeOrder() {
      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      location.reload();
    }

    displayCart();
    