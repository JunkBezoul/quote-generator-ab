/*const quote = document.getElementById ("quote");
const author = document.getElementById ("author");*/


console.log("fdhk")
function getQuote() {
  fetch("http://localhost:1337/api/citations")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  quote.innerHTML = `"${data.data[0].attributes.Citation}"`;
  author.innerHTML = `- "${data.data[0].attributes.Nom}"`;
  })
}