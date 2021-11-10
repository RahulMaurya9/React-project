const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementsByClassName("btn");

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const newJoke = fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}

document.querySelector('.btn').addEventListener('click' , generateJoke)
