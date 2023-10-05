// const inputField = document.querySelector("input");

// const addMovie = (event) => {
//   event.preventDefault();
//   const movieName = inputField.value;
//   const listItem = document.createElement("li");

//   listItem.textContent = movieName;

//   const movieList = document.querySelector("ul");
//   movieList.appendChild(listItem);

//   inputField.value = "";
// };

// const form = document.querySelector("form");
// form.addEventListener("submit", addMovie);

const inputField = document.querySelector("input");

function addMovie(event) {
  event.preventDefault();

  const movieName = inputField.value;
  const newMovie = document.createElement("li");
  const movieList = document.querySelector("ul");

  newMovie.textContent = movieName;
  movieList.appendChild(newMovie);

  inputField.value = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", addMovie);
