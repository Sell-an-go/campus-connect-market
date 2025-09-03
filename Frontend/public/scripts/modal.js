const modalOverlay = document.getElementById("product-modal");
const productCards = document.querySelectorAll(".product-card");
const modalCloseBtn = document.querySelector(".modal-close-btn");

// Get all modal element
const modal = document.getElementById("product-modal");
const modalTitle = document.querySelector(".modal-title");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.querySelector(".modal-price");
const modalCategory = document.getElementById("modal-category");
const modalCondition = document.getElementById("modal-condition");
const modalDescription = document.querySelector(".modal-description");
const modalLocation = document.querySelector(".modal-location");


const openModal = (product) => {
  modalTitle.textContent = product.title;
  modalImage.src = product.image_urls;
  modalPrice.textContent = `₹${product.price}`;
  modalCategory.textContent = product.category;
  modalCondition.textContent = product.condition;
  modalDescription.textContent = product.description;
  modalLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${product.location}`;

  modalOverlay.style.display = "flex";
};

const closeModal = () => {
  modalOverlay.style.display = "none";
};

modalCloseBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});