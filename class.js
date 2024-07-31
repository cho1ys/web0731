// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype = {
//     toString : function(){
//         return `(${this.x}, ${this.y})`
//     }
// }
// let pt1 = new Point(10,20)
// let pt2 = new Point(100,200)
// console.log(pt1.toString())
// console.log(pt2.toString())

// function Circle(r){
//     this.r = r
// }
// Circle.prototype.getArea = function(){
//     return Math.PI * this.r **2
// }
// const c1 = new Circle(1)
// const c2 = new Circle(2)
// console.log(c1.getArea === c2.getArea)

// class Person{
//     constructor(name){
//         this.name = name
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`)
//     }
//     static sayHello(){
//         console.log('Hello')
//     }
// }
// const me = new Person('윤성')
// me.sayHi()
// Person.sayHello()

// const Person = (function(){
//     function Person(name){
//         this.name = name
//     }
//     Person.prototype.sayHi = function(){
//         console.log('Hi' + this.name)
//     }
//     Person.prototype.sayHello = function(){
//         console.log('Hello')
//     }
//     return Person
// }())
// const me = new Person('윤성')
// console.log(me.name)
// me.sayHi()
// me.sayHello()

// class Square{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     area(){
//         return this.width * this.height
//     }
//     static areas(width,height){
//         return width*height
//     }
// }
// const sq = new Square(3,4)
// console.log(sq.area())
// console.log(Square.areas(4,5))

// const Person = {
//     fn : 'yunsung',
//     ln : 'choi',

//     get fulln(){
//         return `${this.fn} ${this.ln}`
//     },
//     set fulln(name){
//         [this.fn, this.ln] = name.split('')
//     }
// }
// console.log(`${Person.fn} ${Person.ln}`)
// console.log(Person.fulln)

// class Person{
//     #name = ''
//     constructor(name){
//         this.#name = name
//     }
//     get name(){
//         return this.#name
//     }
// }
// const me = new Person('윤성')
// console.log(me.name)

// class Vehicle{
//     constructor(name,wheel){
//         this.name = name
//         this.wheel = wheel
//     }
// }
// const myV = new Vehicle('산타페',4)
// console.log(myV)

// class bicycle extends Vehicle{
//     constructor(name,wheel){
//         super(name,wheel)
//     }
// }
// const bc = new bicycle('자전거',2)
// console.log(bc)

// class base{
//     constructor(name){
//         this.name = name
//     }
//     sayhi(){
//         return `hi! ${this.name}`
//     }
// }
// class dddd extends base{
//     sayhi(){
//         return `${super.sayhi()}`
//     }
// }
// const d = new dddd('윤성')
// console.log(d.sayhi())


// function Book(title, author, price){
//     this.title = title
//     this.author = author
//     this.price = price
//     this.date = 0
//     this.page =0

//     Book.prototype.setPages =(page)=> {
//         this.page = page;
//     };
    
//     Book.prototype.setDate =(date)=> {
//         this.date = date;
//     };
// }
// const mb = new Book('제목','지은이','가격')
// mb.setPages(300)
// mb.setDate(730)

// console.log(mb)