let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".cards");

async function getAllCards() {
  let res = await axios(`http://localhost:3000/candidate/${id}`);
  let data = await res.data;
  cards.innerHTML = `
  <div class="f-crd">
  <div class="fa">
    <img src="https://media.licdn.com/dms/image/D4E35AQHkgNhlVAUnSw/profile-framedphoto-shrink_200_200/0/1699798819335?e=1708272000&v=beta&t=9D3WKq7JMSka8rJMgboepI-kUdzSWvCaOg8cmk0aT0g" alt="">
  </div>
  
  <div class="fc">
      <h1>Jeyran Huseynzada</h1>
      <span>FrontEnd Developer</span>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </div>
  <div class="f-b">
      <div class="p">
          <p>Figma</p>
      </div>
      <div class="p">
          <p>Java</p>
      </div>
      <div class="p">
          <p>Photoshop</p>
      </div>
  </div>
  <div class="fd">
      <div class="apply">
          <p><i class="bi bi-geo-alt"></i>Azerbaijan</p>
      </div>
      <div class="cash">
          <p><span>$50-$60 </span>|hr</p>
      </div>
    
  </div>
    </div>`
    ;
}
getAllCards();
