var pokemonRepository = (function () {
  var repository = [  {
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
  }];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: '', height: '', weight: '', abilities: [] });

pokemonRepository.getAll().forEach(({
  name,
  height,
  weight,
  abilities: [firstItemFromAbilities, secondItemFromAbilities]
}) => {
  document.write("<br/> <br/> name: " + name + "<br/> height: " + height + "<br/> weight: " + weight + "<br/> abilities: " + firstItemFromAbilities + ", " + secondItemFromAbilities);
});
