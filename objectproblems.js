/*
//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.
 
//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.
//TODO Create Functions: Craeate functions to add a contact, view all contacts, and search for a contact by name.
//* Output Results: Use console.log to display the contacts and search results.

//declare variables
let userInput;
let contact =
[
    {
        name: 'Caleb Straily',
        phoneNumber: '662-231-8472',
        email: 'caleb.straily@mscoding.org'
    },
    {
        name: 'Gavin Chunn',
        phoneNumber: '662-123-4567',
        email: 'silly.boi@hotmail.aol'
    },
    {
        name: 'Logan Chunn',
        phoneNumber: '801-987-6543',
        email: 'bruh.moment@gmail.com'
    }
];

//loops back to the main menu for each selection until the user exits by entering 3
while (userInput != "4")
{
    userInput = prompt("1. Add Contact\n2. View Contacts\n3. Search Contact\n4. Exit");

    switch (true)
    {
        //allows the user to add a contact to the list
        case (userInput == 1):
            addContact(contact);
            break;
        //outputs the contact list to the console
        case (userInput == 2):
            viewContacts(contact);
            break;
        //allows the user to search for a contact by full name
        case (userInput == 3):
            searchContact(contact);
            break;
        //breaks out of the switch case statement
        case (userInput == 4):
            break;
        default:
            console.log("Invalid Input.");
            break;
    }
}

//allows the user to add a contact to the list
function addContact(contact)
{
    //declare variables to store user inputs
    let contactName;
    let contactNumber;
    let contactEmail;

    contactName = prompt("Enter the contact's first and last name.");
    contactNumber = prompt("Enter the contact's phone number.");
    contactEmail = prompt("Enter the contact's email address.");

    //assigns the user inputs to attributes of a new object
    let newObject = 
    {
        name: contactName,
        phoneNumber: contactNumber,
        email: contactEmail
    };

    //pushes the new object to the contact list
    contact.push(newObject);

    //outputs the contact list with the newly added contact
    console.log("Updated Contact List:");
    console.log(contact);
}

//outputs the contact list to the console
function viewContacts(contact)
{
    console.log("Contact List:");
    console.log(contact);
}

//allows the user to search for a contact by full name
function searchContact(contact)
{
    let userSearch = prompt("Enter the first and last name of the contact you would like to search for.");

    //repeats for every element in the contact array
    for (let i = 0; i < contact.length; i++)
    {
        //checks if the name inputted by the user matches a given name attribute
        if (userSearch === contact[i].name)
        {
            //outputs the contact's information if true
            console.log("User found!");
            console.log(contact[i]);
            return;
        }
    }

    //outputs if the nested "if" statement was never true and returned out of the function
    console.log("Contact not found.");
}

//! Student Grade Management
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.
 
//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
  ];
 
//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.
//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.

//declares a object array to store the students who's grade was below the class average
let belowAverage = [];

//calls two functions to calculate the class average and add the students who are below class average to an object array to output to the console
let overallAverage = classAverage(students);
belowAverageStudents(students, overallAverage, belowAverage);

//calculates the class average
function classAverage(students)
{
    //declare variables
    let sum = 0;
    let gradeCount = 0;
    let average;

    //repeats for every element in the students array
    for (let i = 0; i < students.length; i++)
    {
        //adds each student's grade to a sum
        sum += students[i].grade;
        //increments a gradeCount to divide the sum by
        gradeCount++;
    }

    //calculates the average
    average = sum / gradeCount;

    //outputs the result for class average
    console.log(`Class Average: ${average.toFixed(2)}%`);

    //returns the average to use as a parameter in the "belowAverageStudents" function
    return average;
}

//adds the students who are below class average to an object array to output to the console
function belowAverageStudents(students, classAverage, belowAverage)
{
    //runs for every element of the students array
    for (let i = 0; i < students.length; i++)
    {
        //checks if the student grade at the current students array index is less than the class average
        if (students[i].grade < classAverage)
        {
            //adds that student to the belowAverage array if true
            belowAverage.push(students[i]);
        }
    }

    //outputs the list of students made a below class average grade
    console.log("Students that need to improve:");
    console.log(belowAverage);
}

//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
 
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//* Output Results: Use console.log to display the movie collection and ratings.

//declare variables
userInput = "";
let movies =
[
    {
        title: 'Cory in the House: All Star Edition',
        genre: 'Family, Musical',
        rating: '9.3/10'
    },
    {
        title: 'Paul Blart: Mall Cop',
        genre: 'Comedy',
        rating: '5.3/10'
    },
    {
        title: 'Your Highness',
        genre: 'Comedy',
        rating: '5.5/10'
    }
];

//loops back to the main menu for each selection until the user exits by entering 3
while (userInput != "4")
{
    userInput = prompt("1. Add Movie\n2. Rate a Movie\n3. View Collection\n4. Exit");

    switch (true)
    {
        //lets the user input a movie to add to the movie collection array
        case (userInput == 1):
            addMovie(movies);
            break;
        //lets the user rate any existing movie within the movie collection array
        case (userInput == 2):
            rateMovie(movies);
            break;
        //outputs the movie collection to the console
        case (userInput == 3):
            viewCollection(movies);
            break;
        //breaks out of the switch statement
        case (userInput == 4):
            break;
        default:
            console.log("Invalid Input.");
            break;
    }
}

//lets the user input a movie to add to the movie collection array
function addMovie(movies)
{
    //sets user input to two variables that correlate to the movie's title and genre
    let movieTitle = prompt("Please enter the title of the movie.");
    let movieGenre = prompt("Please enter the genre of the movie.");

    //stores the movieTitle and movieGenre variables into a new object variable
    let newMovie = 
    {
        title: movieTitle,
        genre: movieGenre,
        rating: 'Not Rated Yet'
    };

    //pushes that object variable to the end of the movies object array
    movies.push(newMovie);
    console.log("Updated Movie List:");
    console.log(movies);
}

//lets the user rate any existing movie within the movie collection array
function rateMovie(movies)
{
    //runs for every element in the movies array
    for (let i = 0; i < movies.length; i++)
    {
        console.log(movies[i]);
    }

    //records the user's input for the movie title of the movie they want to add/update a rating for
    let ratingChoice = prompt("Please choose which movie you would like to rate.");

    //runs for every element in the movies array
    for (let i = 0; i < movies.length; i++)
    {
        //checks if the user's rating choices matches an existing movie title
        if (ratingChoice === movies[i].title)
        {
            //lets the user input a rating for the movie
            let newRating = prompt("Enter the rating out of 10.");

            //assigns/creates the rating attribute for the current iterated object
            movies[i].rating = newRating; 

            //outputs the updated movie collection using a for loop to accurately display the movie collection without having to exit the prompt menu
            console.log("Updated Movie Collection");

            for (let j = 0; j < movies.length; j++)
            {
                console.log(movies[j]);
            }
            return;
        }
    }
}

//outputs the movie collection to the console
function viewCollection(movies)
{
    console.log("Movie Collection:");

    for (let i = 0; i < movies.length; i++)
        {
            console.log(movies[i]);
        }
        return;
}

//! Library Book Tracker
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.
 
//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
  ];
//TODO Filter Available Books: Write a function to list all available books.
//TODO Filter Borrowed Books: Write a function to list all borrowed books.

//declare objects to store sorted objects
let availableBooks = [];
let borrowedBooks = [];

userInput = "";

//loops back to the main menu for each selection until the user exits by entering 3
while (userInput != "3")
{
    userInput = prompt("1. Sort Books by Available\n2. Sort Books by Borrowed\n3. Exit\n");

    switch (true)
    {
        //sorts the books by available status
        case (userInput == 1):
            availableSort(books, availableBooks);
            break;
        //sorts the books by borrowed status
        case (userInput == 2):
            borrowedSort(books, borrowedBooks);
            break;
        //breaks out of the switch statement
        case (userInput == 3):
            break;
        default:
            console.log("Invalid Input.");
            break;
    }
}

//sorts the books by available status
function availableSort(books, availableBooks)
{
    //repeats for every element in the books array
    for (let i = 0; i < books.length; i++)
    {
        //checks if the book status at the current iterated element is "available"
        if (books[i].status == "available")
        {
            availableBooks.push(books[i]);
        }
    }
    
    //repeats for every element in the books array and outputs the elements individually to properly display in the console
    for (let i = 0; i < availableBooks.length; i++)
    {
        console.log(availableBooks[i]);
    }
}

//sorts the books by borrowed status
function borrowedSort(books, borrowedBooks)
{
    //repeats for every element in the books array
    for (let i = 0; i < books.length; i++)
        {
            //checks if the book status at the current iterated element is "borrowed"
            if (books[i].status == "borrowed")
            {
                borrowedBooks.push(books[i]);
            }
        }
        
    //repeats for every element in the books array and outputs the elements individually to properly display in the console
    for (let i = 0; i < borrowedBooks.length; i++)
    {
        console.log(borrowedBooks[i]);
    }
}

*/

/*

//! Recipe Organizer
//? Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//TODO  Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
  ];
//TODO Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.
//TODO Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.
//* Display All Recipes: Write a function to display all recipes with their details.

let userInput;

while (userInput != "4")
{
    userInput = prompt("1. Add Recipe\n2. Update Recipe\n3. Display Recipe List\n4. Exit\n");

    switch (true)
    {
        //sorts the books by available status
        case (userInput == 1):
            addRecipe(recipes);
            break;
        //sorts the books by borrowed status
        case (userInput == 2):
            updateRecipe(recipes);
            break;
        //breaks out of the switch statement
        case (userInput == 3):
            displayRecipes(recipes);
            break;
        case (userInput == 4):
            break;
        default:
            console.log("Invalid Input.");
            break;
    }
}

function addRecipe(recipes)
{
    let recipeTitle = prompt("What is the title of the recipe?");
    let recipeIngredient = [];
    let recipeInput;

    do
    {
        recipeInput = prompt("Add each ingredient of the recipe. Press 2 when finished.");

        if (recipeInput != "2")
        {
            recipeIngredient.push(recipeInput);
        }
    } while (recipeInput != "2");

    let recipeInstructions = prompt("Please write out the instructions for the recipe.");

    let newObject = 
    {
        title: recipeTitle,
        ingredients: recipeIngredient,
        instructions: recipeInstructions
    };

    recipes.push(newObject);

    console.log("Update Recipes List:");

    for (let i = 0; i < recipes.length; i++)
    {
        console.log(recipes[i]);
    }
}

function updateRecipe(recipes)
{
    let updateInput = prompt("Please enter the title of the recipe you would like to update.");

    for (let i = 0; i < recipes.length; i++)
    {
        if (updateInput === recipes[i].title)
        {
            let recipeInstructions = prompt(`Please update the instructions for ${recipes[i].title}.`);

            recipes[i].instructions = recipeInstructions;
            break;
        }
    }

    console.log("Updated Recipe List:");

    for (let i = 0; i < recipes.length; i++)
    {
        console.log(recipes[i]);
    }
}

function displayRecipes(recipes)
{
    console.log("Recipe List:");

    for (let i = 0; i < recipes.length; i++)
    {
        console.log(recipes[i]);
    }
}

*/

/*

//! Car Dealership Inventory
//? Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.
let cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 }
  ];
//TODO Each car should have properties like make, model, year, and price.
//TODO Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
//TODO Update Car Price: Enable the user to update the price of an existing car.
//* Display All Cars: Write a function to display all cars in the inventory.

let userInput;

while (userInput != "4")
{
    userInput = prompt("1. Add Car\n2. Update Car Price\n3. Display All Cars\n4. Exit\n");

    switch (true)
    {
        //sorts the books by available status
        case (userInput == 1):
            addCar(cars);
            break;
        //sorts the books by borrowed status
        case (userInput == 2):
            updateCarPrice(cars);
            break;
        //breaks out of the switch statement
        case (userInput == 3):
            displayCars(cars);
            break;
        case (userInput == 4):
            break;
        default:
            console.log("Invalid Input.");
            break;
    }
}
    
function addCar(cars)
{
    let carMake = prompt("What is the make of the car?");
    let carModel = prompt("What is model of the car?");
    let carYear = prompt("What is the year of the car?");
    let carPrice = prompt("What is the price of the car?");

    let newObject = 
    {
        make: carMake,
        model: carModel,
        year: Number(carYear),
        price: Number(carPrice)
    };

    cars.push(newObject);

    console.log("Updated Cars List:");

    for (let i = 0; i < cars.length; i++)
    {
        console.log(cars[i]);
    }
}

function updateCarPrice(cars)
{
    let updateInput = prompt("Please enter the model of the car you would like to update the price for.");

    for (let i = 0; i < cars.length; i++)
    {
        if (updateInput === cars[i].model)
        {
            let carPrice = prompt(`Please update the price for the ${cars[i].make} ${cars[i].model}.`);
            cars[i].price = Number(carPrice);
            break;
        }
    }

    console.log("Updated Cars List:");

    for (let i = 0; i < cars.length; i++)
    {
        console.log(cars[i]);
    }
}

function displayCars(cars)
{
    console.log("Cars List:");
    
    for (let i = 0; i < cars.length; i++)
    {
        console.log(cars[i]);
    }
}

*/

/*

//! Pet Names with Details
//TODO Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.

let pets = 
[
    { name: "Scrappy", type: "Dog", age: 16},
    { name: "Sandy", type: "Dog", age: 18},
    { name: "Felina", type: "Cat", age: 17},
];

//TODOEach object should contain name, type, and age.
//TODO  Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.
//* Display All Pet Names: Write a function to display all pets with their details.

let userInput;

while (userInput != "3")
{
    userInput = prompt("1. Add Pet\n2. Display All Pets\n3. Exit\n");

    switch (true)
    {
        //sorts the books by available status
        case (userInput == 1):
            addPet(pets);
            break;
        //sorts the books by borrowed status
        case (userInput == 2):
            displayPets(pets);
            break;
        //breaks out of the switch statement
        case (userInput == 3):
            break;
        default:
            console.log("Invalid Input.");
            break;
    }

    function addPet(pets)
    {
        let petName = prompt("What is the pet's name?");
        let petType = prompt("What type animal is the pet?");
        let petAge = prompt("What is the pet's age?");

        let newObject = 
        {
            name: petName,
            type: petType,
            age: Number(petAge),
        };

        pets.push(newObject);

        console.log("Update Pet List:");

        for (let i = 0; i < pets.length; i++)
        {
            console.log(pets[i]);
        }
    }

    function displayPets(pets)
    {
        console.log("Pet List:");

        for (let i = 0; i < pets.length; i++)
        {
            console.log(pets[i]);
        }
    }
}

*/