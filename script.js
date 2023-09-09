//access elements with DOM
const button = document.querySelector("button");

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

button.addEventListener("click", createForm);
let wasCalled = false;
function createForm() {
    if(!wasCalled) {
        wasCalled = true;
        //create break line
        let br = document.createElement("br");

        //create form
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");  
        document.body.appendChild(form);

        //create input for title and append to form
        let title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("id", "title")
        title.setAttribute("placeholder", "Title")
        form.appendChild(title);
        
        form.appendChild(br.cloneNode());

        //create input for author and append to form
        let author = document.createElement("author");
        author.setAttribute("type", "text");
        author.setAttribute("id", "author");
        author.setAttribute("placeholder", "author");
        form.appendChild(author);
        
        form.appendChild(br.cloneNode());
        
        //create submit button and append to form
        let submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        form.appendChild(submit);
        
    }
    
}
