let btn = document.getElementById("logout-btn");
btn.addEventListener("click", async () => {
    console.log("Im working!")
    await fetch("http://localhost:2000/logout"); 
    window.location.href = "/";
})