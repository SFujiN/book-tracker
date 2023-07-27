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

/* function to add book to the myLibrary array
 * title: string
 * author: string
 * pages: int
 * read: boolean
 * return: void
 */
function addBookToLibrary(title, author, pages, read) {
  let entry = new Book(title, author, pages, read);
  myLibrary.push(entry);
}

function displayLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].info());
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);
displayLibrary(myLibrary);


