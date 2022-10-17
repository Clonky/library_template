bookForm = document.querySelector(".addbook");
sendBook = document.getElementById("submit-book");
library = document.querySelector(".content")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.createEntry = function () {
        const entry = document.createElement("article")
        entry.classList.add("book-card");
        entry.classList.add("read");
        let headline = document.createElement("h1");
        let headlineText = document.createTextNode(`Title: ${this.title}`)
        headline.appendChild(headlineText);
        entry.appendChild(headline);
        let authorLine = document.createElement("h2");
        let authorText = document.createTextNode(`Author: ${this.author}`);
        authorLine.appendChild(authorText);
        entry.appendChild(authorLine)
        let pagesLine = document.createElement("div");
        let pagesText = document.createTextNode(`Pages: ${this.pages}`);
        pagesLine.appendChild(pagesText);
        entry.appendChild(pagesLine)
        if (this.read === false) {
            entry.classList.toggle("read")
        }
        return entry;
    }
}

infoCollectors = {
    title: document.getElementById("title"),
    author: document.getElementById("author"),
    pages: document.getElementById("pages"),
    read: document.getElementById("read")
};

function readInfo() {
    title = infoCollectors.title.value;
    author = infoCollectors.author.value;
    pages = infoCollectors.pages.value;
    read = infoCollectors.read.value;
    return new Book(title, author, pages, read);
}

function addABook(book) {
    bookList.push(book)
}

sendBook.addEventListener("click", function (e) {
    let book = readInfo();
    let entry = book.createEntry();
    library.appendChild(entry)
})

let testBook = new Book("Herzog", "Zwei", 255, false);
let testBook2 = new Book("Long Title Long Title Long Title", "Long Author Long Author Long Author", 255, true);
library.appendChild(testBook.createEntry());
library.appendChild(testBook2.createEntry());