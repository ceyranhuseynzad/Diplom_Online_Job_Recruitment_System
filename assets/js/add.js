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