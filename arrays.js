const books = ["Pinocho", "Harry Potter", "I don't want it to be that long", "Bible"];


books.unshift("Little prince") // to add at the beggining
books.push("War and peace") // to add at the end

const indexOfHarry = books.indexOf("Harry Potter");

books.splice(indexOfHarry, 1);

books.pop();
books.shift();

console.log(books);


const godFatherMovies = ["The Godfather", "The Godfather II", "The Godfather III", "The Godfather IV", "The Godfather V"];

godFatherMovies.forEach(function(movie){ 
    // this is a callback function (anonymous)
    // we don't need to name it because we are not reusing it outside
    console.log(movie);

})

const students = ["Barbi", "Malú", "Gav", "Kumar"];

function sayHi(name){
    console.log(`Hello ${name}!`);
}
function sayBye(name){
    console.log(`Bye ${name}!`);
}

sayHi("Laura");

students.forEach(function(student){
    sayHi(student)
    sayBye(student)
})

// SPLIT

const userName = "Marina Cotanda Program Manager";


const userNameInArray = userName.split(" ")
console.log("This is the username array: ", userNameInArray);
console.log("But we didn't modify the original string: ", userName);
const dogName = "Lucas ";

// console.log(dogName.split(""));