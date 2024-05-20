const cards = document.querySelector(".cards");
const data = "../";
console.log(cards);

function FetchJson() {
  fetch("../json/data.json")
    .then((response) => response.json())
    .then((obj) => WriteDataHtml(obj));
}

FetchJson();

function WriteDataHtml(obj) {
  for (let i = 0; i < obj.length; i++) {
    cards.innerHTML += ` 
    <div class="card">
        <img
          src="${obj[i].img}"
          alt="${obj[i].name}"
        />
        <article>
          <div>
            <p>${obj[i].name}</p>
            <strong>${obj[i].price} so'm</strong>
          </div>
          <button>Add</button>
        </article>
    </div>`;
  }
}
