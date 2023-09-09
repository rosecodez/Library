//access elements with DOM
const button = document.querySelector("button");
const submit = document.getElementById("submit")
const table = document.getElementById("table-container");

//constructor for making book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let book1 = new Book('The Children of Húrin', 'J.R.R. Tolkien', 320, true )
let book2 = new Book('Beren and Lúthien', 'J.R.R. Tolkien', 297, true )
let book3 = new Book('The Silmarillion', 'J.R.R. Tolkien', 365, true )

//library array
const myLibrary = [book1, book2, book3];

//function that adds the book/s to the library
function addBookToLibrary() {
    myLibrary.push(userInput);
}

//loop through array
for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
}

button.addEventListener("click", () => {
    dialog.showModal();
});

submit.addEventListener("click", function (event) {
    event.preventDefault();
    displayTable()
});
function displayTable() {
    table.style.display = "table";
}
