document.querySelector(".login-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // stop normal form submit
    
    let data = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    };
    console.log(data)

    let response = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data) 
    });
    
    let result = await response.json();

    if (result.result == false) {
          let errorMsg = document.getElementById("error-msg");
          errorMsg.innerText =  "User not found";
          errorMsg.style.display = "block";
          
    }
    else {
        window.location.href = "/";
    }
});