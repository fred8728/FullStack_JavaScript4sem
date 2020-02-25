//c1 vertify that you can use node module by requiring one of node built-in modules
let http = require("http");

//Interface 1
//a Create a typescript interface Ibook, which should encapsulate information about a book, including:
//title, author, published, pages

/**
 * 
 *  interface Ibook{
    title: string;
    author: string;
    published: Date;
    pages: number;
}
 */

//b Create a function that takes an IBook instance and test with an object instance
function book(book: Ibook){
    return `${book.title} ${book.author} ${book.published} ${book.pages}`;
}

var b1 = {title:'Prinsessen på ærten', author:'H.C Andersen', published: new Date('1950-05-03'), pages:89}
console.log(book(b1))

//d Change the interface to make published and pages become optional - vertify new behavior

/**
 * interface Ibook{
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}
 */

function make(title:string, author:string, published?:Date, pages?:number):Ibook{
    return published?  {title, author, published, pages} :{title, author}
}

var m1 = make('Den grimme ælling', 'H.C Andersen',new Date('1980-12-04'))

console.log(m1)

//e Change the interface to make author readonly - vertify new behavior
// NOTE: Readonly means that once a property is assigned a value it cannot be changed

interface Ibook{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

let bookObject: Ibook = {title:'Prinsessen på ærten', author:'H.C Andersen', published: new Date('1950-05-03'), pages:89}
//bookObject.author = 'Det virker'

//f create a class Book and demonstrate the 'Java Way' of implementing an interface
class Book implements Ibook {
    title: string;
    author: string;
    published: Date;
    pages: number;
    constructor(title:string, author:string, published:Date, pages:number){
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
}

let b2 = new Book('Manden og hans hund', 'Frederikke Nilsson', new Date('2020-03-04'), 302)

console.log(b2)
