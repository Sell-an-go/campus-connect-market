(async function() {
    try {
        const loginCheck = await fetch("http://localhost:2000/loginVerify");
        const result = await loginCheck.json();

        let status = document.getElementById("isActive");
        let active = document.getElementById("active");
        const profileDropdown = document.getElementById("profileDropdown");

        if (result == undefined || result.result === "User not verified!") {

            status.innerText = "Login";
            active.href = "/pages/login.html";
          
            profileDropdown.style.display = "none";

            let ele2 = document.getElementById("userVerify");
            if(ele2 != null) {
                ele2.innerText = "You need to login first."
                document.querySelector(".sell-form").addEventListener("submit", async (e) => {
                  e.preventDefault(); // stop normal form submit
                })
            }

            let ele = document.getElementById("toMyItems");
            ele.href = "/pages/login.html"
        } 
        else {
            console.log("Index.html----", result);
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
