let container = document.querySelector(".container1");

let list_product = [
  { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
  { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
  { name: "Table", price: 64, availability: true, id: "3", category: "shirt" },
  { name: "Vase", price: 16, availability: true, id: "4", category: "bag" },
  { name: "Flower", price: 26, availability: true, id: "5", category: "shoes" },
  { name: "Bedsheet", price: 49, availability: true, id: "6", category: "shirt" },
  { name: "Mat", price: 69, availability: false, id: "7", category: "shirt" },
  { name: "Teapot", price: 13, availability: true, id: "8", category: "bag" },
  { name: "Large Bookshelf", price: 88, availability: true, id: "9", category: "shirt" },
  { name: "Small Bookshelf", price: 75, availability: true, id: "10", category: "bag" },
  { name: "Wardrobe", price: 82, availability: false, id: "11", category: "shirt" },
  { name: "Carpet", price: 45, availability: false, id: "12", category: "bag" },
];

function displayProducts(category) {
  container.innerHTML = '';

  for (let i = 0; i < list_product.length; i++) {
    let product = list_product[i];

    if (category === "All" || product.category === category) {
      let box_content = document.createElement("div");
      box_content.classList.add("box_content");
      box_content.innerHTML = `
        <p>ID: ${product.id}</p>
        <p>Name: ${product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Availability: ${product.availability ? "Còn hàng" : "Hết hàng"}</p>
        <p>Category: ${product.category}</p>
      `;

      box_content.addEventListener("dblclick", function() {
        showUpdateForm(product);
      });

      container.appendChild(box_content);
    }
  }
}

function showUpdateForm(product) {
  container.innerHTML = '';

  let updateForm = document.createElement("div");
  updateForm.innerHTML = `
    <h2>Update Product</h2>
    <label for="update-name">Name:</label>
    <input type="text" id="update-name" value="${product.name}">
    <label for="update-price">Price:</label>
    <input type="number" id="update-price" value="${product.price}">
    <label for="update-availability">Availability:</label>
    <select id="update-availability">
      <option value="true" ${product.availability ? "selected" : ""}>Còn hàng</option>
      <option value="false" ${!product.availability ? "selected" : ""}>Hết hàng</option>
    </select>
    <label for="update-category">Category:</label>
    <input type="text" id="update-category" value="${product.category}">
    <button onclick="updateProduct(${product.id})">Update</button>
  `;

  container.appendChild(updateForm);
}

function updateProduct(productId) {
  let newName = document.getElementById("update-name").value;
  let newPrice = document.getElementById("update-price").value;
  let newAvailability = document.getElementById("update-availability").value === "true";
  let newCategory = document.getElementById("update-category").value;

  let productToUpdate = list_product.find(product => product.id === productId);
  productToUpdate.name = newName;
  productToUpdate.price = parseFloat(newPrice);
  productToUpdate.availability = newAvailability;
  productToUpdate.category = newCategory;

  displayProducts("All");
}

displayProducts("All");
