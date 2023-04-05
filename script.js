console.log("fdhk")
function getQuote() {
  fetch("http://localhost:1337/api/citations")
  .then(res => res.json())
  .then(data => {
    let quote = document.querySelector("#quote");
    let author = document.querySelector("#author");
    var i = (Math.floor(Math.random() * data.data.length));
    console.log(data)
  quote.innerHTML = data.data[i].attributes.Citation;
  author.innerHTML = data.data[i].attributes.Auteur.data[0].attributes.Auteur;
  })
}

getQuote();
setInterval(getQuote, 5000);