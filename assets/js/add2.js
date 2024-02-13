let id = new URLSearchParams(window.location.search).get("id");
let titleInput = document.querySelector(".title");
let aboutInput = document.querySelector(".about");
let priceInput = document.querySelector(".price");
let photoInput = document.querySelector(".photo");
let addBtn = document.querySelector(".addbtn");
let roundedImage = document.querySelector(".rounded-image");




axios(`http://localhost:3000/candidate/${id}`).then((res) => {
  titleInput.value = res.data.title
  aboutInput.value = res.data.about
  priceInput.value = res.data.price
  roundedImage.src = res.data.photo

  addBtn.innerHTML = "EDIT";
});




addBtn.addEventListener("click", function () {
  if (!id) {
    axios.post(`http://localhost:3000/candidate`, {
      title: titleInput.value,
      about: aboutInput.value,
      price: priceInput.value,
      price: priceInput.value,
      photo: roundedImage.src,
      
    });
  } else {
    axios.patch(`http://localhost:3000/candidate/${id}`, {
      title: titleInput.value,
      about: aboutInput.value,
      price: priceInput.value,
      price: priceInput.value,
      photo: roundedImage.src,
 
    });
  }
});