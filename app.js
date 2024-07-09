// document.write("<i>hello  there i am anew here<i>")
// console.log("hello there i am new here")

// var a=10;
// var b=20;

// console.log(a+b)

// var x="hi i am good person"
// console.log(x)

// var a=10
// var a=20
// console.log(a)

// var FirstName="hello  man"
// console.log(FirstName)

// function add(a,b){
//   let x=a;
//   let y=b;
//   return x+y
// }

// console.log(add(12,11))

// let a=10
// let b="hello"
// let c=10.20
// let d=function(){}
// let e=[12,34]
// let f=null
// let g=true
// let h

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))
// console.log(typeof(f))
// console.log(typeof(g))
// console.log(typeof(h))

// operators in javascript
// airthmatics

// let a=3
// let b=16

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a++)
// console.log(a)
// console.log(a--)
// console.log(a)
// console.log(a**b)
// console.log(a++ + b--)

// shorthand

// a-=b
// console.log(a)
// a+=b
// console.log(a)
// a**=b
// console.log(a)
// a/=b
// console.log(a)

// console.time("test")
// let a=[1,2,23,45,24,23]
// console.table(a)

// console.timeEnd("test")

// Comparison Operator

// let x=13
// let y=14
// let z="13"

// console.log(x==y)
// console.log(x==z)
// console.log(x!=y)
// console.log(x!=z)
// console.log(x!==z)
// console.log(x===y)
// console.log(x===z)
// console.log(x<y)
// console.log(x>y)
// console.log(x<=z)
// console.log(null==undefined)
// console.log(null==undefined)

// IF STATEMENT

// let age=prompt("are you 18+ write yes OR no")
// if (age="yes") {
//     firstName=prompt("write your first name")
//     LastName=prompt("write your Last name")
// }
// else{
//     alert("you are not allowed to enter")
// }

// console.log(firstName)
// console.log(LastName)

// let per=prompt("write your percentage")
// if(per>=80 && per<=100){
//     console.log("A+")
// }
// else if(per>=60 && per<=80){
//     console.log("A")
// }
// else if(per>=45 && per<=60){
//     console.log("B")
// }
// else if(per>=33 && per<=45){
//     console.log("C")
// }
// else if(per<33){
//     console.log("fail")
// }else
// console.log("enter valid percentage")

// let a=30
// let b=20

// console.log((a<b)?"a is smaller ":"b is smaller")

// let age=prompt("enter valid age")
// switch (true) {
//     case (age>=15 && age<=30):
//        console.log("you are young")
//         break;
//     case (age>=30 && age<=50):
//        console.log("you are younger")
//         break;
//     case (age>=50 && age<=100):
//        console.log("you are old")
//         break;
//     case (age<18):
//        console.log("you are not eligible")
//         break;

//     default:
//         console.log("enter valid age betwwen 1 to 100")
//         break;
// }

// let number1=parseFloat(prompt("enter the number 1"))
// let number2=parseFloat(prompt("enter the number 2"))

// alert("first number is :"+number1)
// alert("first number is :"+number2)
// let result=number1+number2
// alert("addition of both number is :" + result)

// let age=parseInt(prompt("enter your age"))
// confirm("your age is:" + age)

// function add(a,b)
// {
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// console.log(add(1,3))

// function sum(math,eng,sc){
//     let s=math+eng+sc
//     return s
// }

// function percentage(tt){
//     let per=tt/300*100
//     console.log(per)

// }
// let total=sum(55,65,76) // FIRST FUNCTION
// percentage(total);

//---------------------- lOCAL AND GLOBAL VARIABLE------------------------

// let a=10
// var b=19

// function add(){
//     let x=11
// console.log(a)
// console.log(b)
// console.log(x)
// }
// add()

// function best(){
//     document.write("mouse click")
// }
// function hello(){
//     document.write("mouse Double click")
// }
// function hello1(){
//     document.write("Right mosue click")
// }
// function hello2(){
//     document.write("on mouse hover")
// }

// function hello3(){
//     document.write("on mouse out")
// }

// function hello4(){
//     document.write("on mouse up")
// }

// function hello5(){
//     document.write("on mouse down")
// }

// function keypress(){
//     alert("on key press any key pressed")
// }

// _------------------WHILE LOOP--------------------

// let a=1;
// document.write("<ol type=I >")
// while (a<=10) {
//     document.write("<li>"+ "ram<br>")
//     a++;
// }
// document.write("<ol>")

// _------------------Do WHILE LOOP--------------------

// let a=1
// do{
//     document.write("<li>"+ "ram<br>")
//     a++;
// }
// while(a<=10)

// _------------------FOR LOOP--------------------

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// for(let i=10;i>=1;i--){
//     console.log(i)
// }

// let n=5
// let string=""
// for(let i=0;i<=n;i++){

//     for(let j=1;j<=i;j++){
//         string+="*"
//     }

//     string+="\n"
// }
// console.log(string)

// *
// **
// ***
// ****
// *****

// let n = 5;
// let string = "";
// // External loop
// for (let i = 0; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// let string = "";
// // External loop
// for (let i = n; i>= 0; i--) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *****
//  ****
//   ***
//    **
//     *

// let n=5
// let string=""
// for(let i=0;i<=n;i++){

//     for(let j=1;j<=n-i;j++){
//         string+="*"
//     }

//     string+="\n"
// }

// console.log(string)

// *****
// ****
// ***
// **
// *

// let row=5;
// let string=""

// for(let i=1;i<=row;i++){
//     for(let j=1;j<=row;j++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// let string = "";
// // External loop
// for (let i = 0; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//     *
//    ***
//   *****
//  *******
// *********

// let n = 5;
// let string = "";
// // External loop
// for (let i = n; i >= 1; i--) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *********
//  *******
//   *****
//    ***
//     *

// let n=5
// let string=""

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         string+=i
//     }
//         string+="\n"
// }
// console.log(string)

// 1
// 22
// 333
// 4444
// 55555

// let n=5
// let string=""

// for(let i=0;i<=n;i++){
//     for(let j=0;j<=i;j++){
//         string+=i
//     }
//         string+="\n"
// }
// console.log(string)

// 0
// 11
// 222
// 3333
// 44444
// 555555

// let n=5
// let string=""

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         string+=j
//     }
//         string+="\n"
// }
// console.log(string)

// 1
// 12
// 123
// 1234
// 12345

// let n=5
// let string=""

// for(let i=n;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         string+=j
//     }
//         string+="\n"
// }
// console.log(string)

// 12345
// 1234
// 123
// 12
// 1

// let n = 5;
// let string = "";

// // External loop

// for (let i = 1; i <= n; i++) {

//   // printing spaces

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k < 2*i; k++) {
//     string +=i;
//   }
//   string += "\n";
// }
// console.log(string);

// 1
// 222
// 33333
// 4444444
//5555555555

// let n = 5;
// let string = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n - i; j++) {
//     string +=" ";
//   }
//   for (let k = 0; k <= i-1; k++) {
//     string +=i;
//   }
//   string += "\n";
// }
// console.log(string);

//      1
//     22
//    333
//   4444
//  55555

// let n = 5;
// let string ="";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i; j++) {
//         string+=" "
//   }
//   for (let k = 1; k <= 2*i-1; k++) {
//     string+="*"
//   }
//   string+="\n"
// }
// console.log(string)

// let n=5
// let string =""

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//     string+=" "
//     }
//     for(let k=1;k<=i;k++){
//         string+="*"
//         }
//     string+="\n"
// }
// console.log(string)

// -------------------------continue and break---------------

// for(let i=0;i<=10;i++){
//     if (i==4){
//         console.log("better luck next time")
//         continue
//         // break
//     }
//     console.log(i)
// }

// ------------------------EVEN ODD NUMBER-----------------

// for (let i=1;i<=40;i++){
//     if(i%2==0){
//         console.log(i,"is even number")
// }
// }

// for (let i=1;i<=40;i++){
//     if(i%2!==0){
//         console.log(i,"is odd number")
// }
// }

// -------------------------nested loop------------------

// for (let i = 1; i <= 100; i = i + 10) {
//   for (let j = i; j <= i+10; j++) {
//     document.write(j+" ")
//   }
//   document.write("<br>")
// }

// string=""
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         string+=i
// }
//     string+="\n"

// }
// console.log(string)

// ------------------------------ARRAYS---------

// let arr=[1,2,3,"harry","tushar",true,null]
// console.log(arr[5])

// for (let i=0;i<=arr.length-1;i++){
// console.log(arr[i])
// }

// arr.forEach(element => {
//     console.log(element)
// });

// -------------------------Take vlues in array from user and show it onn screen-------------

// let arr=new Array(5);

// arr[0]=12;
// arr[1]="henery";
// arr[2]="ford";
// arr[4]="jack";
// console.log(arr)

// for(let get=0;get<arr.length-1;get++){
//     arr[get]=prompt("enter a value in array")
// }

// for(let a=0;a<arr.length-1;a++){
//     console.log(arr[a])
// }

// -----------------------------MULTIDIMENSIONAL ARRAY-------------------

// let std=[
//     ["harry",18,"male","B.com"],
//     ["jack",20,"male","B.sc"],
//     ["anna",23,"female","B.com"],
//     ["gori",24,"female","B.A."],
// ]
// for(a=0;a<std.length;a++){
//     for(b=0;b<std.length;b++){
//         document.write(std[a][b]+" ")
//     }
//     document.write("<br>")
// }

// console.log(std[0][0])

// let std=[
//     ["harry",18,"male","B.com"],
//     ["jack",20,"male","B.sc"],
//     ["anna",23,"female","B.com"],
//     ["gori",24,"female","B.A."],
// ]
// document.write("<table border='1px' cellspacing='0'>")
// for(a=0;a<std.length;a++){
//     document.write("<tr>")
//     for(b=0;b<std.length;b++){
//         document.write("<td>"+std[a][b]+"</td>")
//     }
//     document.write("<br>")
//     document.write("</tr>")
// }

// document.write("</table>")

// let arr=["harry",18,"male","bca"]
// arr[0]="aman"
// delete arr[1]

// console.log(arr)

// ----------------------------ARRAY METHODS------

// ------------REVERSE AND SORT-----

// let arr=["sanju","aman","colta","karan","zeba"]

// arr.sort()
// console.log(arr)
// arr.reverse()
// console.log(arr)

// ------------PUSH AND POP-----

// let arr=[11,12,13,14,15,16,17,18]
// arr.push(19)
// console.log(arr)
// arr.pop()
// console.log(arr)

// -------------shift() & unshift()--------

// let arr=[11,12,13,14,15,16,17,18]

// arr.unshift(110)
// console.log(arr)
// arr.shift()
// console.log(arr)

// -------------Join() & Concat()--------

// let arr1=[1,2,3]
// let arr2=[10,20,30]
// let arr4=[100,200,300]

// let arr3=arr1.concat(arr2,arr4)

// console.log(arr3)

// let arr=["aman","singh","jhanjhar"]
// let arr1=arr.join("-")
// console.log(arr1)

// -------------slice() & splice()--------

// let arr=["Akheel","rajat","bhanu","priya","yash","sonu","kalu"]

// let arr2=arr.slice(1,4)  //slice(startpoint,endPoint)
// let arr2=arr.slice(-3,-1)
// let arr2=arr.slice(-1)
// let arr2=arr.slice(4)
// console.log(arr2)

// arr.splice(2,4,"tushar")

// console.log(arr)

// console.log("jai shree RAM");
// console.log("jai shree RAM");

// let fn = 0;
// let fn1 = 1;
// let fn2;
// for (let i = 0; i <= 10; i++) {
//     fn2 = fn + fn1;
//   fn = fn1;
//   fn1 = fn2;
//   console.log(fn1);
// }



// -----------ISARRAY METHOD---------------



// let arr=["sanjay","aman"]
// let b=20
// let c="rahul"
// let d=Array.isArray(arr)
// let e=Array.isArray(20)
// let f=Array.isArray(c)
// console.log(d)
// console.log(e)
// console.log(f)


// ---------------INDEXOF AND LAST INDEX OF-----


// let arr=["Akheel","rajat","bhanu","priya","yash","sonu","kalu"]


// let ind=arr.indexOf("rajat",2)
// let ind1=arr.indexOf("raju")
// console.log(ind)
// console.log(ind1)


// let ind=arr.lastIndexOf("bhanu")
// console.log(ind)
// let ind=arr.lastIndexOf("bhanu",1)
// console.log(ind)



// -------------------------ARRAY_INCUDES()---


// let arr=["Akheel","rajat","bhanu","priya","yash","sonu","kalu"]


// let inc=arr.includes("Akheel")
// console.log(inc)


// -------------------------ARRAY_Find & FindIndex()---

// let ages=[18,23,12,34,12]

// let age=ages.findIndex(checkAdult)
// console.log(age)

// function checkAdult(age){
// return age>=34
// }

// -------------------------ARRAY_Filter()---

// let age=[10,20,43,44,9,20]
// let ag=age.filter(chekAdult)
// console.log(ag)
// function chekAdult(age){
// return age>=18 
// }



// let letter=["aman","singh","Dhatarwal"]
// let st=letter.toString()
// console.log(st)

// let letter=["aman","singh","Dhatarwal"]
// console.log(letter.fill("RAM"))


// -------------------------------FOREACH()---------


// let arr=["sanjay","aman","karna"]
// arr.forEach(function(ele,ind){
//     console.log(`index ${ind} and value is ${ele}`)
//     })
    
    
    
    // ---------------------------------OBJECTS()-----------
    
// let obj={
//     name:"Aman",
//     age:22,
//     address:"Pahad Ganj chhetra 302 1/2",
//     hobbies:["cricket","football"],
//     sayHello:function(){
    //         console.log(`hello ${obj.name} your address is ${obj.address} and your hobbies are as follow ${obj.hobbies}`)
    //     }
    
    // }
    // obj.sayHello()
    
    
    // let obj=new Object();
    // obj.Fname="Aman";
    // obj.Lname="Dhatarwal";
    // obj.age=22;
    // console.log(obj)
    
    
    // ---------------------------------HOW TO PRINT OBJECTS()-----------
    
    // let student=[
        //     {
            //         name:"Aman",age:15
            //     },
            //     {
                //         name:"Tushar",age:25
                //     },
                //     {
                    //         name:"Rahul",age:35
//     },
// ]

// console.log(student)
// for(let a=0;a<=student.length-1;a++){
    //     console.log(student[a].name +student[a].age)
    // }

    console.log("jai shree ram")
  


    
    