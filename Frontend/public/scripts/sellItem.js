const input = document.getElementById("product-image");
const label = document.getElementById("upload-label");

input.addEventListener("change", () => {
    if (input.files && input.files[0]) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(input.files[0]);
        img.style.width = "200px"
        img.style.height = "100px"
        label.innerHTML = "";
        label.style.padding = "10px";
        label.appendChild(img);

    }
})