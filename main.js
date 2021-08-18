const getButton = document.querySelector("#getImage");
const imgTag = document.querySelector("#images");

function fetchData() {
  fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(jsonData => {
      imgTag.setAttribute("src", jsonData.url);
      imgTag.style.display = "block"; // to unhide img tag
    })
    .catch(err => console.log(err))
}

getButton.addEventListener("click", fetchData);