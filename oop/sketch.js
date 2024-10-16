// oop
// Sami
// Oct 10, 2024
let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Sami",
                    1234567891011, "leatherbound",
                    515, width*0.3);
}

function draw() {
  background(220);
  myBook.display();
}

class Book{
  // 1.constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }
  //2. class methods
  display(){
    //render our book on the screen
    rectMode(CENTER);  textAlign(CENTER,CENTER);
    textSize(20);
    switch(this.coverType){
      case "softcover":
        fill(250,200,150);    break;
      case "hardcover":
        fill(120,255,255);    break;
      case "leatherbound":
        fill(150,100,15);     break;
    }
    rect(this.x, height/2, this.pageCount/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }
    
  printOut(){
    //print out our data in a nice format
    print(this.title + ", by " + this.author);
    print("Length: " + this.pageCount);
    print("ISBN: " + this.isbn);
  }
}