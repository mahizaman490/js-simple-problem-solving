//practice problems with if else


// let a,b;
// a = 3;
// b = 3;
//  let co1 = a<=b;
//  let co2 = a===b;
//   console.log(co1&&co2);


  //if else 
//   let color ;
//   if(mode === "dark-mode"){
//     color = 'black';
//   }else{
//     color = 'white';
//   }
//ex 2

// let age;
// if(age >= 18){
//     console.log('adult');
// }else{
//     console.log('child');
// }
//ex3
// let num = prompt('enter a number');
// if(num%2==0){
//   alert('number is even');
// }else{
//     alert('number is odd');
// }

// ex4
// let marks = prompt('enter your mark');
// if(marks >=90 && marks <= 100){
//     alert('A');
// }else if(marks < 90 && marks >=80){
//     alert('B'); 
// }else if(marks >= 70 && marks <80){
//     alert('C');
// }else if(marks >= 60 && marks < 70){
//     alert('D');
// }else if(marks < 60){
//     alert('Fail');
// }else{
//     alert('invalid');
// }

//ex5

// let num1 = prompt("enter first number");
// let num2 = prompt("enter second number");
// if(num1 > num2){
//     alert("number 1 is greater than number 2");
// }else if (num1 < num2){
//     alert("num 2 is greater than number 1");
// }else{
//     alert("the numbers are equal");
// }


// ex6
// let age = prompt('enter your age');
// if(age >= 0 && age <=12){
//     alert('child');
// }else if(age>=13 && age <=17){
//     alert('teenager');
// }else if(age>=18 && age <= 64){
//     alert('adult');
// }else if (age>64){
//     alert('senior');
// }else{
//     alert('invalid age ');
// }

//ex 7 
// let year = prompt('enter a year ');
// if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//     alert('leap year')
// }


//ex8
// let num = prompt('enter any number');
// if(num % 5 == 0){
//     alert('multiple');
// }else{
//     alert('not multiple')
// }

// ex9
// let num = prompt("enter number");
// num = Number(num)
// if(num === 0){
//     alert('zero');
// }else if(num < 0){
//     alert('negative number')
// }else{
//     alert('positive number')
// }


//Month Name:
// let num = prompt('enter number ');
// if(num === 1){
//     alert('january');
// }else if(num === 2){
//     alert('february');
// }else if(num === 3){
//     alert('march');
// }else if(num === 4){
//     alert('april');
// }else if(num === 5){
//     alert('may');
// }else if(num === 6){
//     alert('june');
// }else if(num === 7){
//     alert('july');
// }else if(num === 8){
//     alert('august');
// }else if(num === 9){
//     alert('september');
// }else if(num === 10){
//     alert('october');
// }else if(num === 11){
//     alert('november');
// }else if(num === 12){
//     alert('december');
// }else {
//     alert('invalid');
// }



//largest number for 3 numbers

// let num1 = prompt('enter number 1');
// let num2 = prompt('enter number 2');
// let num3 = prompt('enter number 3');
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// num3 = parseFloat(num3);
// if(num1>num2 && num1>num3){
//     alert('num 1 is the largest number')
// }else if(num2>num1 && num2>num3){
//     alert('num 2 is the largest number')
// }else{
//     alert('num 3 is the largest nuumber')
// }


//Vowel or Consonant:
// Develop a program that prompts the user for a single character and prints whether it's a vowel or consonant.


// let char = prompt('enter any character');
// if(char === "a" || char === "A" || char === "e"|| char === "E"|| char === "i"|| char === "I"|| char === "o"|| char === "O"|| char === "u"|| char === "U"){
//     alert('vowel')
// }else{
//     alert('consonant')
// }

// let weight = prompt('enter your weight');
// let height = prompt("enter your height");

// weight = weight / 1000;
// height = height * 0.3048;

// weight = parseFloat(weight);
// height = parseFloat(height);

// let BMI = weight/height*height;
// BMI = parseFloat(BMI);
// if(BMI >= 18.5 && BMI <= 24.9){
//     alert("normal weight")
// }else if( BMI >= 25.0 && BMI <= 29.9){
//     alert("Overweight")
// }else if (BMI < 18.5){
//     alert("Underweight")
// }else if(BMI > 30.0 ){
//     alert('obese')
// }else{
// alert('please give me correct answers')
// }


// Factorial Calculator:
// Write a program that takes an integer as input and calculates its factorial.
// let num = prompt('write a number');
// num = parseFloat(num);
// let calculation = num * num - 1;
// calculation = parseFloat(calculation);
// alert(calculation)


// Write a program that takes two numbers as input and prints their sum if they are positive, otherwise, print "Both numbers should be positive."

// let n1 = prompt('enter num 1');
// let  n2 = prompt('enter num 2');
// let sum ;
// n1 = parseFloat(n1)
// n2 = parseFloat(n2)

// if(n1>=0 && n2>=0){
//     sum = n1+n2;
// }else{
//     alert("Both numbers should be positive.")
// }


// Develop a program that checks if a triangle is equilateral, isosceles, or scalene based on its side lengths.
// let side1 = prompt('Enter side 1');
// let side2 = prompt('Enter side 2');
// let side3 = prompt('Enter side 3');


// side1 = parseFloat(side1);
// side2 = parseFloat(side2);
// side3 = parseFloat(side3);

// if (side1 === side2 && side2 === side3) {
//     alert('Equilateral');
// } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     alert('Isosceles');
// } else {
//     alert('Scalene');
// }
//prime number


//loops


// for(let count = 1; count <= 1000; count++){
//   console.log('mahi');
// }

// let sum = 0;
// for(let i = 1; i<=5; i++){
//   sum = sum + i;
//   console.log(sum);
// }

// let n = prompt('enter a number');
// let sum = 0;
// for(let i = 1; i <= n; i++){
//   sum = sum + i;
//   console.log(sum);
// }


// for(let i = 1; i<= 5; i++){
//   console.log("i = " , i);
// }

// let str = 'Mahi';
// let size = 0;
// for( let likha of str){
 
//   size++

// }

// console.log(size);

// let n = 5;
// let sum = 0;
// for(let i = 1;i<=n; i++){
//  sum = sum + i;

// }
// console.log(sum);


// let n = 10;
// let sum = 0;
// for(let i = 2; i<=n; i++){
//   if(i%2==0){
//     sum = sum + i;
//   }
// }

// console.log(sum);


// let n = 10;
// let sum = 0;
// for(let i = 1; i<=10;i++){
//   if(i%2==1){
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let n =10;
// let squrt;
// for(let i = 1; i<=10; i++){
//   squrt = i*i;
//   console.log(squrt);
// }


// let str = 'Mahi Zaman'
// size = 0;

// for(let likha of str){
//   console.log(likha);
//   size++
// }
// console.log(size);

// let student = {
//   name: 'Mahi',
//   age:20,
//   gpa: 4,
//   isPass:true
// }
// let keyNumber=0;
// for(let key in student){
//   console.log(key,student[key]);
//   keyNumber++
// }
// console.log(keyNumber);


// let myArr = ['mahi','achol','tabassum','mim']

// for(ele in myArr){
//   console.log(ele[0]);
// }

// let n = 100;
// for(let i = 0 ; i<=n; i++){
//   if(i%2==0){
//     console.log(i);
//   }
// }


// let num = 25;
// let user = prompt('enter right number');
// while(num != user){
//   user = prompt(' rong number');
// }
// alert('right answer');


// let name1 = 'mahi';
// let user = prompt('enter here the right name');
// while(name1 != user){
//   user = prompt('please try again');
// }
// console.log('wow');



// let pass = 'programming2023';
// let user = prompt('Enter your password here');
// while(pass != user){
//   user = prompt('wrong password');
// }

// alert('success');

// let str = 'ma'
// console.log('ma');
// console.log(str[0]);

// let temp = `this is a special line`;
// console.log(typeof temp);


// let obj = {
//   name: 'mahi',
//   age: 20
// }

// let output = `my name is ${obj.name} and my age is ${obj.age}`;
// console.log(output);


// let str = "    my name is fatematuz jannat Mahi     ";
// let upper = str.toUpperCase();
// let lower = str.toLocaleLowerCase();
// let trimm = str.trim();
// console.log(upper,lower,trimm);

