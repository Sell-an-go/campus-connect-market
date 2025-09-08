(async function() {
    try {
        const loginCheck = await fetch("http://localhost:2000/loginVerify");
        const result = await loginCheck.json();

        let status = document.getElementById("isActive");
        let active = document.getElementById("active");
        const profileDropdown = document.getElementById("profileDropdown");

        if (result == undefined || result.result === "User not verified!") {

            status.innerText = "Login";
            window.location.href = "/pages/login.html";
          
            profileDropdown.style.display = "none";

           
        } 
        else {
            console.log("Index.html----", result);
            let ele = document.getElementById("toMyItems");
            ele.href = "/pages/myItems.html"
            status.innerText = result.username;

            active.href = "javascript:void(0)"; // disable link
            
            active.addEventListener("click", (event) => {
              event.preventDefault();
              event.stopPropagation();
              profileDropdown.classList.toggle("show");
            });
          
            window.addEventListener("click", (event) => {
              if (
                profileDropdown.classList.contains("show") &&
                !active.contains(event.target)
              ) {
                profileDropdown.classList.remove("show");
              }
            });
        }
}  catch (err) {
    console.error("Error in login verify fetch:", err);
}
})();


(async function(){
    const params = new URLSearchParams(window.location.search)
   let product = JSON.parse(decodeURIComponent(params.get("product"))) 
   let res = await fetch(`/findUser?id=${product.owner_id}`)
    let user = await res.json()
     
    let itemContactSection = document.getElementById("itemContactSection")
    itemContactSection.innerHTML= `
    <div id="product-modal">
  <div>
    <h2 class="modal-title">${product.title}</h2>
    <div class="modal-body">
      <div class="modal-image-container">
        <img
          id="modal-image"
          src=${product.image_urls}
          alt="Product Image"
        />
      </div>
      <div class="modal-details">
        <p class="modal-price">₹${product.price}</p>
        <div class="modal-tags">
          <span id="modal-category" class="modal-tag category"
            >${product.category}</span
          >
          <span id="modal-condition" class="modal-tag condition">${product.condition}</span>
        </div>
        <h3>Description</h3>
        <p class="modal-description">
          ${product.description}
        </p>
        <h3>Location</h3>
        <p class="modal-location">
          <i class="fa-solid fa-location-dot"></i> ${product.location}
        </p>
        <hr />
        <h3>Posted by ${user.name}</h3>
        <p>Contact No- ${user.contactNo}</p>
        <p>Email- ${user.email}</p>
         
      </div>
    </div>
  </div>
</div>

    `
})();