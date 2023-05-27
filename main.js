
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting
  const searchInput = document.getElementById("search-input").value;
  // Make the API request using the search input value
  const baseUrl = "https://imdb8.p.rapidapi.com/auto-complete?q=";

  const fetchUrl = baseUrl + searchInput;

   // Clear the movies list
  document.querySelector('.movies').innerHTML = '';
  fetch(fetchUrl, {
    "mode": 'cors',
    "method": "GET",
    "headers": {
		'X-RapidAPI-Key': '842366e889mshc5ce48ae7a8404ep1a1b3fjsnd46b294e8aef',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
  })
  .then(response => response.json())
  .then(data => {
    const list = data.d;
    list.map((item) =>{
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}" <h2> ${name} </h2> </li>`
        document.querySelector('.movies').innerHTML += movie;
    })
  })
  .catch(err => {
    console.log(err);
  });


});





