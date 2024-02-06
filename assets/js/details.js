let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".cards");

async function getAllCards() {
  let res = await axios(`http://localhost:3000/all/${id}`);
  let data = await res.data;
  cards.innerHTML = `
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
</div>`
    ;
}
getAllCards();
