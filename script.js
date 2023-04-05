/*const quote = document.getElementById ("quote");
const author = document.getElementById ("author");*/

console.log("fdhk")
function getQuote() {
  fetch("http://localhost:1337/api/citations")
  .then(res => res.json())
  .then(data => {
    var i = (Math.floor(Math.random() * data.data.length));
    console.log(data)
  quote.innerHTML = data.data[i].attributes.Citation;
  author.innerHTML = data.data[i].attributes.Auteur.data[0].attributes.Auteur;
  })
}

setInterval(getQuote, 5000);