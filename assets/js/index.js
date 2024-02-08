let cards = document.querySelector(".cards");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let loadMore = document.querySelector(".loadmore");
let maxlength = 3;
let sorted = "descending";
let filteredArr = [];
let copyArr = [];

async function getAllCards() {
  let res = await axios("http://localhost:3000/all");
  let data = await res.data;
  copyArr = data;
  cards.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.slice(0, maxlength).forEach((el) => {
    cards.innerHTML += `
    <div class="fa">
    <div class="icon"><i class="bi bi-globe"></i></div>
    <div class="cop"><p>Linkedin</p></div>
  </div>
  <div class="fb">
    <div class="full"><p>Fulltime</p></div>
    <div class="private"><p>Private</p></div>
    <div class="urgent"><p>Urgent</p></div>
  </div>
  <div class="fc">
    <h1>${data.hh}</h1>
    <p>${data.pi}</p>
  </div>
  <div class="fd">
    <div class="cash"><p><span>${data.price} </span>|hr</p></div>
    <div class="apply"><p>Apply</p></div>
  </div>
            <a  href="./details.html?id=${el.id}" >LEARN MORE</a>
            <div>
              <a onclick=deleteBtn(${el.id}) >DELETE</a>
              <a onclick="editBtn(${el.id})" href="./add.html?id=${el.id}">EDİT</a>
              <a onclick="addFav(${el.id})"  >ADD FAV</a>
            </div>
          </div>
        </div>
      </div>
        `;
  });
}
getAllCards();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllCards();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "ascending") {
    filteredArr.sort((a, b) => b.price - a.price);
    sorted = "descending";
    sortBtn.innerHTML = "SORT ASC";
  } else if (sorted === "descending") {
    filteredArr.sort((a, b) => a.price - b.price);
    sorted = "def";
    sortBtn.innerHTML = "SORT DSC";
  } else {
    filteredArr=copyArr
    sorted = "ascending";
    sortBtn.innerHTML = "SORT";
  }
  getAllCards();
});

function deleteBtn(id) {
  axios.delete(`http://localhost:3000/all/${id}`);
  window.location.reload()
}

async function addFav(cardId) {
  let res = await axios(`http://localhost:3000/all/${cardId}`);
  let obj = await res.data;
  axios.post(`http://localhost:3000/save`, obj);
}

loadMore.addEventListener("click", function () {
  maxlength = maxlength + 3;
  getAllCards();
})