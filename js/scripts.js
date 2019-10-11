var repository = [
  {
    name: "Ninetales",
    height: 5,
    weight: 19.9,
    type: "fire",
    abilities: ["flash-fire", "drought"]
  },
  {
    name: "Umbreon",
    height: 3,
    weight: 27,
    type: "dark",
    abilities: ["synchronize", "inner-focus"]
  },
  {
    name: "Flareon",
    height: 2,
    weight: 25,
    type: "fire",
    abilities: ["flash-fire", "guts"]
  }
]
for (var i = 0; i < repository.lenght; i++) {
  if(repository[i].height > 1 && repository[i].height <= 3) {
    document.write(repository[i].name + "(" + repository[i].height + ")");
  }else{
    document.write(repository[i].name + "(" + repository[i].height + ")" + " - Wow, that's so big!");
  }
}
