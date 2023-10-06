const message = document.querySelector("#message");

const inputField = document.querySelector("input");

function addMovie(event) {
  event.preventDefault();

  // add the movie to the list
  const movieName = inputField.value;
  const newMovie = document.createElement("li");
  const movieList = document.querySelector("ul");

  newMovie.textContent = movieName;
  newMovie.addEventListener("click", crossOffMovie);
  movieList.appendChild(newMovie);

  // clear the input field
  inputField.value = "";

  // add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  newMovie.appendChild(deleteBtn);
}

function deleteMovie(event) {
  message.textContent = "Movie Deleted";
  event.target.parentNode.remove();
}

function crossOffMovie(event) {
  let thisMovie = event.target;
  thisMovie.classList.toggle("checked");
  if (thisMovie.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie added back";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", addMovie);
