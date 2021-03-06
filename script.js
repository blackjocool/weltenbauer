var apiUrl = 'https://pokeapi.co/api/v2/pokemon';

var callLink = async function (url) {
  var response = await fetch(url);

  return response.json();
};

var getData = async function (limit) {
  return callLink(apiUrl + '?limit=' + limit);
};

getData(10).then(async function (pokemon) {
  var pokeElement = document.getElementById('pokemon');

  for (var pokemonObj of pokemon.results) {
    var pokemon = await callLink(pokemonObj.url);
    var nameElement = document.createElement('div');
    nameElement.innerHTML = pokemon.name;

    pokeElement.appendChild(nameElement);
  }
});
