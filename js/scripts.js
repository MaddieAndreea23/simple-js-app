var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $pokemonList = document.querySelector("ul");

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function add(pokemon) {
    pokemon.abilities = pokemon.abilities || [];
    repository.push(pokemon);
  };

  function getAll() {
    return repository;
  };

  function addListItem(pokemon) {
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-name");
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  };

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);   });
  }

  function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };

  console.log(pokemonRepository.getAll());
  pokemonRepository.add({
    name: "Rapidash",
    weight: 95,
    height: 1.7,
    abilities: ["flash-fire", "flame-body", "run-away"]
  });
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
