// (async function () {
//     try {
//         let verification = await fetch("http://localhost:2000/loginVerify");
//         let res = await verification.json();
//         if(res.result == "User not verified!") return 

//         let response = await fetch("http://localhost:2000/myItems");
//         let products = await response.json();
//         console.log(products);

//         const grid = document.getElementById("product-grid");

//         grid.replaceChildren();
//         products.forEach((product) => {
//             // Create a product card element
//             let card = document.createElement("div");
//             card.classList.add("product-card");

//             card.innerHTML = `
//                 <div class="card-image">
//                   <img src="${product.image_urls}">
//                   <span class="tag category-tag">${product.category}</span>
//                   <span class="tag condition-tag ${product.condition.toLowerCase()}">
//                     ${product.condition}
//                   </span>
//                 </div>
//                 <div class="card-content">
//                   <h4>${product.title}</h4>
//                   <p class="price">₹ ${product.price}</p>
//                   <a class="status">${product.status}</a>
//                 </div>
//               `;

//             // find the status element for this card
//             let statusElement = card.querySelector(".status");

//             // apply initial style based on product.status
//             if (product.status.trim() == "available") {
//                 statusElement.classList.add("green-frame");
//             } else {
//                 statusElement.classList.add("red-frame");
//             }

//             // add toggle on click
//             statusElement.addEventListener("click", () => {
//                 if (statusElement.textContent.trim() == "available") {
//                     statusElement.textContent = "sold";
//                     statusElement.classList.remove("green-frame");
//                     statusElement.classList.add("red-frame");
//                 } else {
//                     statusElement.textContent = "available";
//                     statusElement.classList.remove("red-frame");
//                     statusElement.classList.add("green-frame");
//                 }
//             });

//             // Add the card to the grid
//             grid.appendChild(card);
//         });
//     }
//     catch (err) {
//         console.log("Error in My Items...", err);
//     }
// })();



(async function() {
    try {
      let response = await fetch("http://localhost:2000/myItems");
      let products = await response.json();
      console.log(products);

      const grid = document.getElementById("product-grid");

      grid.replaceChildren();
      products.forEach((product) => {
      // Create a product card element
      let card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <div class="card-image">
          <img src="${product.image_urls}">
          <span class="tag category-tag">${product.category}</span>
          <span class="tag condition-tag ${product.condition.toLowerCase()}">
            ${product.condition}
          </span>
        </div>
        <div class="card-content">
          <h4>${product.title}</h4>
          <p class="price">₹ ${product.price}</p>
          <a class="status">${product.status}</a>
        </div>
      `;
    
      // find the status element for this card
      let statusElement = card.querySelector(".status");
    
      // apply initial style based on product.status
      if (product.status.trim() == "available") {
        statusElement.classList.add("green-frame");
      } else {
        statusElement.classList.add("red-frame");
      }
  
      // add toggle on click
      statusElement.addEventListener("click", () => {
        if (statusElement.textContent.trim() == "available") {
          statusElement.textContent = "sold";
          statusElement.classList.remove("green-frame");
          statusElement.classList.add("red-frame");
        } else {
          statusElement.textContent = "available";
          statusElement.classList.remove("red-frame");
          statusElement.classList.add("green-frame");
        }
      });
  
      // Add the card to the grid
      grid.appendChild(card);
    });
}
catch(err) {
    console.log("Error in My Items...", err);
}
})();