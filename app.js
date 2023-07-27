let myLibrary = [];

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return title + " by " + author + ", " + pages + " pages, " + (read ? "read" : "not read yet");
  }
}

function addBookToLibrary() {

  // do stuff here
  return;
}

function displayLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].info());
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);
displayLibrary(myLibrary);


