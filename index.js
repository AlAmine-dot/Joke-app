const header = document.getElementById("header");
const content = document.getElementById("content");
const app = document.querySelector(".button7");

// n'oublie pas les () dans json() et txt()

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      header.textContent = data.data.content.text_head;
      if (data.data.content.text !== "") {
        content.textContent = data.data.content.text;
      } else if (
        data.data.content.text === "" &&
        data.data.content.text_hidden !== ""
      ) {
        content.textContent = "......";
        content.addEventListener("click", () => {
          content.textContent = data.data.content.text_hidden;
        });
      }
    });
}

getJoke();

app.addEventListener("click", () => {
  getJoke();
});
