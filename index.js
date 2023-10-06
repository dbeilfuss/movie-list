const message = document.querySelector("#message");

const inputField = document.querySelector("input");

function addMovie(event) {
  event.preventDefault();

  // add the movie to the list
  const movieName = inputField.value;
  const newMovieContainer = document.createElement("li");
  const movieTitle = document.createElement("div");
  const movieList = document.querySelector("ul");

  movieTitle.classList.add("movieTitle");
  movieTitle.textContent = movieName;
  movieTitle.addEventListener("click", crossOffMovie);
  newMovieContainer.appendChild(movieTitle);
  movieList.appendChild(newMovieContainer);

  // clear the input field
  inputField.value = "";

  // add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  newMovieContainer.appendChild(deleteBtn);
}

function deleteMovie(event) {
  const movieName = event.target.previousElementSibling.textContent;
  displayMessage(`${movieName} Deleted`);
  event.target.parentNode.remove();
}

function crossOffMovie(event) {
  let thisMovie = event.target;
  thisMovie.classList.toggle("checked");
  if (thisMovie.classList.contains("checked")) {
    displayMessage(`${thisMovie.textContent} Watched!`);
  } else {
    displayMessage(`${thisMovie.textContent} added back`);
  }
}

function displayMessage(text) {
  message.classList.remove("hide");
  message.textContent = text;
  setTimeout(() => {
    message.classList.add("hide");
  }, 2000);
}

const form = document.querySelector("form");
form.addEventListener("submit", addMovie);
