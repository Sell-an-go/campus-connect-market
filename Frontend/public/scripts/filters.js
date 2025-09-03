let filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-btn.active")?.classList.remove("active");
        button.classList.add("active");
    });
});

// Load Products
async function loadProducts(API_Params) {
  try {
    let response = await fetch(
      `http://localhost:2000/getProduct?${API_Params}`
    );
    let products = await response.json();
    const grid = document.getElementById("product-grid");
    const TotalItemsElement = document.getElementById("TotalItems");
    TotalItemsElement.innerHTML = `${products.length}`;
    // Changes when colleges added.
    const TotalCollegesElement = document.getElementById("TotalColleges");
    TotalCollegesElement.innerHTML = `${products.length}`;
    grid.replaceChildren();
    products.forEach((product) => {
      // Create a product card element
      let card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
      <div class="card-image">
      <img src="${product.image_urls}">
      <span class="tag category-tag">${product.category}</span>
      <span class="tag condition-tag ${product.condition.toLowerCase()}">${
        product.condition
      }</span>
      </div>
      <div class="card-content">
      <h4>${product.title}</h4>
      <p class="price">₹ ${product.price}</p>
      <p class="location"><i class="fa-solid fa-location-dot"></i> ${
        product.location
      }</p>
      <p class="short-desc">${product.description}</p>
      </div>
      `;
      card.addEventListener("click", () => {
        openModal(product);
      });
      // Add the card to the grid
      grid.appendChild(card);
    });
  } catch (error) {
    console.log(
      `Error during loading when filtering by categories ${error.message}`
    );
  }
}

// Loops for adding eventListener to every category.
const arrCategory = [
  "All Categories",
  "Furniture",
  "Electronics",
  "Books",
  "Appliances",
  "Clothing",
  "Other",
];
let selectCollege = document.getElementById("filter-btn-college");
arrCategory.forEach((category) => {
  let filter_btn = document.getElementById(`filter-btn-${category}`);
  filter_btn.addEventListener("click", () => {
    loadProducts(
      `category=${category.toLowerCase()}&college=${selectCollege.value}`
    );
  });
});


// This function adds the colleges into the select options when if new college
//  is added by the user.
const getAllColleges = async () => {
  let data = await fetch("http://localhost:2000/getAllColleges");
  let colleges = await data.json();
  let selectCollege = document.getElementById("filter-btn-college");
  colleges.forEach((college) => {
    let newOption = document.createElement("option");
    let activeCategory = document.getElementsByClassName(".filter-btn active");
    newOption.value = college.name;
    newOption.id = college.name;
    newOption.className = "select-options-college";
    newOption.text = college.name;
    selectCollege.appendChild(newOption);
  });
  selectCollege.addEventListener("change", (e) => {
    let selected = e.target.value;
    loadProducts(
      `category=${
        document.querySelector(".filter-btn.active").value
      }&college=${selected}`
    );
  });
};

// Search Bar filter
let searchBar = document.getElementById('search-bar')
searchBar.addEventListener('input',()=> {
    let query = searchBar.value.toLowerCase().split(" ").join("")
    let products = document.querySelectorAll('.product-card')
    products.forEach((product) => {
      let text = product.innerHTML.toLowerCase()
      if(text.includes(query)) {
        product.style.display = "block";
      }
      else{
        product.style.display = "none";
      }
    })
})

loadProducts("category=all categories&college=All Colleges");
getAllColleges();