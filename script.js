//access elements with DOM
const button = document.querySelector("button");
const confirm = document.getElementById("confirm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const dialog = document.querySelector("dialog");
const readed = document.getElementById("readed");
const notreaded = document.getElementById("notreaded");
const cancel = document.getElementById("cancel");

//constructor for making book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let book1 = new Book('The Children of Húrin', 'J.R.R. Tolkien', 320, true );
let book2 = new Book('Beren and Lúthien', 'J.R.R. Tolkien', 297, true );
let book3 = new Book('The Silmarillion', 'J.R.R. Tolkien', 365, true );

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
    displayTable();
});

confirm.addEventListener("click", function (event) {
    event.preventDefault();
    dialog.close();
    th1.textContent = title.value;
    th2.textContent = author.value;
    th3.textContent = pages.value;
    if(readed.checked) {
        th4.textContent = readed.value;
    } else if (notreaded.checked) {
        th4.textContent = notreaded.value;
    }
});

function displayTable() {
    tableContainer.style.display = "flex";
}
const tableContainer = document.getElementById("table-container");
//create table row with dom
function createTable() {
    //table
    let table = document.createElement("table");
    tableContainer.appendChild(table);
    table.setAttribute("id", "table");
    //row
    let row = document.createElement("tr");
    table.appendChild(row);
    row.setAttribute("id", "row");
    //th
    let th1 = document.createElement("th");
    row.appendChild(th1);
    th1.setAttribute("id", "th1");

    let th2 = document.createElement("th");
    row.appendChild(th2);
    th2.setAttribute("id", "th2");

    let th3 = document.createElement("th");
    row.appendChild(th3);
    th3.setAttribute("id", "th3");

    let th4 = document.createElement("th");
    row.appendChild(th4);
    th4.setAttribute("id", "th4");
}
createTable();