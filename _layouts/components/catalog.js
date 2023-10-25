const catalogData = [
    {
        name: "Chocolate Chip",
        price: 3.99,
        image: "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
    },
    {
        name: "Double Chocolate Chip",
        price: 4.99,
        image: "https://stylesweet.com/wp-content/uploads/2022/08/DoubleChocolateChipCookies_featured.jpg",
    },
    {
        name: "Snickerdoodle",
        price: 6.99,
        image: "https://cakemehometonight.com/wp-content/uploads/2021/12/Snickerdoodle-Cookies-FI.jpg",
    },
    {
        name: "Snickerdoodle",
        price: 6.99,
        image: "https://cakemehometonight.com/wp-content/uploads/2021/12/Snickerdoodle-Cookies-FI.jpg",
    },
    {
        name: "Snickerdoodle",
        price: 6.99,
        image: "https://cakemehometonight.com/wp-content/uploads/2021/12/Snickerdoodle-Cookies-FI.jpg",
    },

];

const cartState = {};

const Cart_States = [];

const catalogGrid = document.getElementById("catalog-grid");

catalogData.forEach((item) =>{
    const card = document.createElement("div")
    card.className = "card";
    
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "cookie";

    const cardContent = document.createElement("div")
    cardContent.className = "card-content";

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = `${item.name} - $${item.price}`


    const chip = document.createElement("a");
    chip.className = "chip";
    chip.textContent = "Add to Cart";
    chip.addEventListener("click", () => {
        const productId = item.name;
        cartState[productId] = (cartState[productId] || 0) + 1;
        console.log(cartState);
        updateCart(); // Call the updateCart function after adding to the cart
      });
      

    cardContent.appendChild(title);
    cardContent.appendChild(chip);

    card.appendChild(image);
    card.appendChild(cardContent);

    catalogGrid.appendChild(card);

})

function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Clear the existing cart content
  
    for (const productId in cartState) {
      const productQuantity = cartState[productId];
  
      if (productQuantity > 0) {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
  
        const itemName = document.createElement("span");
        itemName.textContent = productId;
  
        const itemQuantity = document.createElement("span");
        itemQuantity.textContent = `x${productQuantity}`;
  
        cartItem.appendChild(itemName);
        cartItem.appendChild(itemQuantity);
  
        cartContainer.appendChild(cartItem);
      }
    }
  }
  


