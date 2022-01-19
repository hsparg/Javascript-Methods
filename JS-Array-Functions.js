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




//*** MAP *****
//*************

//1. Get array of all names 
const names = characters.map((character) => character.name);

//2. Get array of all height
const heights = characters.map((character) => character.height);

//3. Get array of objects with just name and height properties 
const minifiedRecords = characters.map((character) => ({
  name: character.name,
  height: character.height
}));

//4. Get array of all first names 
const firstNames = characters.map((character) => character.name.split(' ')[0]);




//*** Reduce ****
//***************

//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + parseInt(cur.mass), 0)

//2. Get total height of all characters 
const totalHeight = characters.reduce((acc, cur) => acc + parseInt(cur.height), 0)

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

// 4. Get total number of characters in all character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)




//*** Sort ****
//*************

//1. Sort by mass 
const byMass = characters.sort((a,b) => a.mass - b.mass)

//2. Sort by height
const byHeight = characters.sort((a,b) => b.height - a.height)

//3. Sort by name 
const byName = characters.sort((a,b) =>{
  if(a.name < b.name) return -1; 
  return 1; 
})

//4. Sort by gender
const byGender = characters.sort((a,b) => {
  if (a.gender === 'female') return  1; 
  return -1; 
}) 


//***Filter***
//************

// 1.Get Characters with mass greater than 100
const greater100Characters = characters.filter((character) => character.mass > 100)

//2. Get Characters with height less than 200
const shorterCharacter = characters.filter((character) => character.height < 200)

//3. Get all male characters 
const maleCharacters = characters.filter((character) => character.gender === "male")

//4. Gell all female 
const femaleCharacters = characters.filter((character) => character.gender === "female")




//*** Every ****
//**************

//1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color ==='blue'
); 

//2. Does every character weight more than 40?
const allMassMoreThan40 = characters.every(
  (character) => character.mass > 40 
);

//3. Is every character shorter than 200?
const allShorterThan200 = characters.every(
  (character) => character.height < 200
);

//4. Is every character male? 
const allMale = characters.every(
  (character) => character.gender === 'male'
);



//*** Some ****
//**************

//1. Is there at least one male character?
const oneMaleCharacter = characters.some(
  (character) => character.gender === 'male'
);

//2. Is there at least one character with blue eyes? 
const oneBlueEye = characters.some(
  (character) => character.eye_color === 'blue'
);


//3. Is there at least one character taller than 210?
const oneTaller210 = characters.some(
  (character) => character.height > 210
);

//4. Is there at least one character that has mass less than 50? 
const oneMassLessThan50 = characters.some(
  (character) => character.mass < 50
);
