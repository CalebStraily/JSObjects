//Objects

//Comparable to arrays just more detailed - short summary - michael


//syntax for objects
let favoriteCharacter = 
{
    fName: "Corvo",
    lName: "Attano",
    hobbies: ["eliminating usurpers of the Royal Throne", "eating grilled blood oxen"],
    occupations: ["Vigilante", "Assassin", "Lord Protector to the Empress", "Royal Spymaster"],
    age: 54,
    currentHealth: "Alive",
};

//This calls the entire object data
console.log(favoriteCharacter);
//Calling one of the property values:
console.log(`My favorite character's first name is ${favoriteCharacter.fName}`);
//Calling a property that has a ARRAY data type
console.log(`One of my favorite character's hobbies is ${favoriteCharacter.hobbies[0]}.`);

//Updates a property value
favoriteCharacter.currentHealth = "Dead on the inside";

console.log(favoriteCharacter.currentHealth);

//Adding a new property to the object
favoriteCharacter.stealthSkills = "He was really good at sneaking!";

console.log(favoriteCharacter);

//Objects can store functions

favoriteCharacter.quote = quoter();

function quoter()
{
    let quote = "Dunwall Tower is not so tall that it can rise above the stench of death.";
    return quote;
}

let listOfMusic = 
[
    {
        title: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        year: 1987
    },
    {
        title: 'Black Magic Woman',
        artist: 'Santana',
        year: 1960
    },
    {
        title: 'Bruv Moment Amogus Parody',
        artist: 'Rick Astley',
        year: 2024
    },
    {
        title: "Bruh",
        artist: "Bruh",
        year: "Bruh",
        brugo: "Bruh",
    }
]

//Format nameOfVar[#index] = the whole object in that index
console.log(`${listOfMusic[0]} will grab the whole object in that index number`);

console.log(`${listOfMusic[1]} will grab the second item in the array.`);

for (let i = 0; i < listOfMusic.length; i++)
{
    if (listOfMusic[i].artist == "Rick Astley")
    {
        console.log(`${listOfMusic[i].artist} - ${listOfMusic[i].title} (${listOfMusic[i].year})`);
    }
}