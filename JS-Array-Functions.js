const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//*** MAP ***
//1. Get array of all names 
const names = characters.map((character) => character.name);
console.log(names)

//2. Get array of all height
const heights = characters.map((character) => character.height);
console.log(heights)

//3. Get array of objects with just name and height properties 
const minifiedRecords = characters.map((character) => ({
  name: character.name,
  height: character.height
}));
console.log(minifiedRecords)

//4. Get array of all first names 
const firstNames = characters.map((character) => character.name.split(' ')[0]);
console.log(firstNames);

//*** Reduce ****

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + parseInt(cur.mass), 0)
console.log(totalMass)

//2. Get total height of all characters 
const totalHeight = characters.reduce((acc, cur) => acc + parseInt(cur.height), 0)
console.log(totalHeight)

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) =>{
  const color = cur.eye_color
  if(acc[color]){
    acc[color]++;
  }else{
    acc[color] =1; 
  }
  
  return acc; 
}, {})

console.log(charactersByEyeColor)

// 4. Get total number of characters in all character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)
