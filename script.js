let count = 0;

//access elements with DOM
const table = document.getElementById("table");
const tableContainer = document.getElementById("table-container");
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

//library array
const myLibrary = [];
let userInput;
//function that adds the book/s to the library
function addBookToLibrary() {
    myLibrary.push(new Book);
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
    createRow(count);
    const th1 = document.querySelector("#th1-"+count);
    const th2 = document.querySelector("#th2-"+count);
    const th3 = document.querySelector("#th3-"+count);
    const th4 = document.querySelector("#th4-"+count);
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
confirm.onclick = function () {
    count++;
    console.log(count);
    if (count <=2) {
        title.value = "";
        author.value = "";
        pages.value = "";
        readed.checked = false;
        notreaded.checked = false;
    }
}

function displayTable() {
    tableContainer.style.display = "flex";
}

//create table row with dom
function createRow(num) {
    let row = document.createElement("tr");
    table.appendChild(row);
    row.setAttribute("id", "row"+num);

    //table headers
    let th1 = document.createElement("th");
    row.appendChild(th1);
    th1.setAttribute("id", "th1-"+num);
    
    let th2 = document.createElement("th");
    row.appendChild(th2);
    th2.setAttribute("id", "th2-"+num);

    let th3 = document.createElement("th");
    row.appendChild(th3);
    th3.setAttribute("id", "th3-"+num);

    let th4 = document.createElement("th");
    row.appendChild(th4);
    th4.setAttribute("id", "th4-"+num);

    let deleteBtn = document.createElement("button");
    row.appendChild(deleteBtn);
    deleteBtn.setAttribute("class", "delete")
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (event) {
        row.remove(); 
    })
}