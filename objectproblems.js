//To better read each program exercise, I recommend commenting all other exercises out apart from the one that you would like to see function.
//Look for the lines that have "//////////////" and replace it with "/*" and "*/" as needed.

//////////////

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

//////////////

//////////////

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

//////////////

//////////////

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
 
//////////////

//////////////

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

//////////////