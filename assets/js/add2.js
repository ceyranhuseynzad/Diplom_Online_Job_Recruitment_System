let id = new URLSearchParams(window.location.search).get("id");
let titleInput = document.querySelector(".title");
let aboutInput = document.querySelector(".about");
let priceInput = document.querySelector(".price");

let addBtn = document.querySelector(".addbtn");


axios(`http://localhost:3000/all/${id}`).then((res) => {
  titleInput.value = res.data.title
  aboutInput.value = res.data.about
  priceInput.value = res.data.price

  addBtn.innerHTML = "EDIT";
});
photoInput.addEventListener('input', (e) => {
  let file = e.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      roundedImage.src = reader.result;
    }
  }
})



addBtn.addEventListener("click", function () {
  if (!id) {
    axios.post(`http://localhost:3000/all`, {
      title: titleInput.value,
      about: aboutInput.value,
      price: priceInput.value,
      
    });
  } else {
    axios.patch(`http://localhost:3000/all/${id}`, {
      title: titleInput.value,
      about: aboutInput.value,
      price: priceInput.value,
 
    });
  }
});