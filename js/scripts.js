var pokemonRepository = (function() {
  var repository = [
    {
      name: "Umbreon",
      height: 1,
      weight: 27,
      abilities: ["synchronize", "inner-focus"]
    },

    {
      name: "Ninetales",
      height: 1.1,
      weight: 19.9,
      abilities: ["flash-fire", "drought"]
    },

    {
      name: "Flareon",
      height: 0.9,
      weight: 25,
      abilities: ["flash-fire", "guts"]
    }
  ];

  var $pokemonList = document.querySelector("ul");

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
    console.log(item);
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

  console.log(pokemonRepository.getAll());
  pokemonRepository.add({
    name: "Rapidash",
    weight: 95,
    height: 1.7,
    abilities: ["flash-fire", "flame-body", "run-away"]
  });
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
