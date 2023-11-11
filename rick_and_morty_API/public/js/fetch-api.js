const charsContainer = document.querySelector(".chars-container");
//search name
const searchInput = document.querySelector("#search");
//species
const speciesFilter = document.querySelector("#species");
//gender
const genderFilter = document.querySelector("#gender");
//status
const statusFilter = document.querySelector("#status");
//Load more Button
const loadMoreButton = document.querySelector("#load-more");

// fetch con axios a mi back end:

const API = "/api";

const defaultFilters = {
  name: "",
  species: "",
  gender: "",
  status: "",
  page: 1,
};

async function getCharacters({ name, species, gender, status, page = 1 }) {
  try {
    const response = await axios.get(`${API}/characters`, {
      params: { name, species, gender, status, page },
    });

    const characters = response.data;
    return characters;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

// charecters in cards format DOM
async function render({ characters }) {
  charsContainer.innerHTML = "";

  if (!Array.isArray(characters)) {
    console.error("Characters is not an array:", characters);
    return;
  }

  characters.forEach((character) => {
    const locationName = character.location.name;
    charsContainer.innerHTML += `
      <div class=" char">
        <img src="${character.image}" alt="" />
        <div class="char-info">
          <h3>${character.name}</h3>
          <span class="fs-4 text">${character.species}</span>
          <span class="fs-5 text">Location: ${locationName}</span>
        </div>
      </div>
    `;
  });
}

function handlerFilterChange(type, event) {
  return async () => {
    defaultFilters[type] = event.target.value;
    charsContainer.innerHTML = "";
    const characters = await getCharacters(defaultFilters);
    render({ characters });
  };
}

async function handlerLoadMore() {
  defaultFilters.page += 1;
  const characters = await getCharacters(defaultFilters);
  render({ characters });
}

//FILTERS:
function addListeners() {
  //filter for species
  speciesFilter.addEventListener("change", async (event) => {
    handlerFilterChange("species", event)();
  });
  //filter for gender
  genderFilter.addEventListener("change", async (event) => {
    handlerFilterChange("gender", event)();
  });

  //filter for status
  statusFilter.addEventListener("change", async (event) => {
    handlerFilterChange("status", event)();
  });
  //search by name
  searchInput.addEventListener("keyup", async (event) => {
    handlerFilterChange("name", event)();
  });

  loadMoreButton.addEventListener("click", handlerLoadMore);
}

async function main() {
  const characters = await getCharacters(defaultFilters);
  addListeners();
  handlerLoadMore();
  render({ characters });
}

main();
