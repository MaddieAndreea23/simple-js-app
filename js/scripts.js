var repository = [
  {
    name: "Umbreon",
    height: 1,
    weight: 27,
    type: "dark",
    abilities: ["synchronize", "inner-focus"]
  },

  {
    name: "Ninetales",
    height: 1.1,
    weight: 19.9,
    type: "fire",
    abilities: ["flash-fire", "drought"]
  },

  {
    name: "Flareon",
    height: 0.9,
    weight: 25,
    type: "fire",
    abilities: ["flash-fire", "guts"]
  }
];
for (var i = 0; i < repository.length; i++) {
  var item = repository[i];
  if (item.height > 1) {
    document.write(item.name + "(height: " + item.height + ")" + " - Wow, that's so big! <br/>");
  } else {
    document.write(item.name + "(height: " + item.height + ") <br/>");
  }
}
