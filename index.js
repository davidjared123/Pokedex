const url = `https://pokeapi.co/api/v2/pokemon`;
const content_pokemons = document.getElementById("main");
const buttons = document.getElementById("buttons");
let templateHtml = "";
let btnNext = "";
let btnPrev = "";

// window.onload = function () {
document.addEventListener("DOMContentLoaded", () => {
  fetchData(url);
});

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    getPokemons(data.results);
    btnNext = data.next
      ? `<button class="button_next btn" data-url=${data.next} /></button>`
      : "";
    btnPrev = data.previous
      ? `<button class="button_prev btn" data-url=${data.previous} /></button>`
      : "";

    buttons.innerHTML = btnPrev + " " + btnNext;
  } catch (error) {
    console.log(error);
  }
};

const getPokemons = async (data) => {
  content_pokemons.innerHTML = "";
  try {
    for (let index of data) {
      let res = await fetch(index.url);
      let pokemon = await res.json();
      // console.log(pokemon);
      templateHtml = `
              <article class="card">
              <img
                src="./images/bg-pattern-card.svg"
                alt="imagen header card"
                class="card-header"
              />
              <div class="card-body">
                <img
                  src="${pokemon.sprites.other.dream_world.front_default}"
                  alt="${pokemon.name}"
                  class="card-body-img"
                />
                <h1 class="card-body-title">
                  ${pokemon.name}
                  <span></span>
                </h1>
                <p class="card-body-text">${pokemon.types[0].type.name}</p>
              </div>
              <div class="card-footer">
                <div class="card-footer-social">
                  <h3>${pokemon.weight}</h3>
                  <p>Weight</p>
                </div>
                <div class="card-footer-social">
                  <h3>${pokemon.height}</h3>
                  <p>height</p>
                </div>
                <div class="card-footer-social">
                  <h3>${pokemon.base_experience}</h3>
                  <p>Experience</p>
                </div>
              </div>
            </article>
              `;
      content_pokemons.innerHTML += templateHtml;
    }
  } catch (error) {
    console.log(error);
  }
};

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    let value = e.target.dataset.url;
    console.log(value);
    fetchData(value);
  }
});
