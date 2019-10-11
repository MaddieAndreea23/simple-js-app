var repository = [
  {
    name: "Ninetales",
    height: 1.1,
    weight: 19.9,
    type: "fire",
    abilities: ["flash-fire", "drought"]
  },

  {
    name: "Umbreon",
    height: 1,
    weight: 27,
    type: "dark",
    abilities: ["synchronize", "inner-focus"]
  },

  {
    name: "Flareon",
    height: 0.9,
    weight: 25,
    type: "fire",
    abilities: ["flash-fire", "guts"]
  }
];

var name = "Ninentales";
let height = 1.1;
for (let i = 0; i >= 0 ; i--) {
  if(i > 1){
    document.write(name + "(height:1.1)");
  }else{
    document.write(name + "(height:1.1)" + " - Wow, that's so big!");
  }
}
