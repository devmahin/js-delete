var num = 67;
var num1 = 546;
console.log(num+num1);



var  mahinnum = 657;
mahinnum +=775;
mahinnum -=655;
mahinnum *= 2;
mahinnum /=10;
console.log(mahinnum);


//capital letter
var lorem = "egyeut ret re7etg ewuytgf ueyrfyt7ewr f7yerwfr ";
console.log(lorem.toUpperCase());


//typeof dia number naki string value chake kore
var number = "ijjhb";
console.log(typeof number);


//tostring mane number dia string
var mahin = 3454;
console.log(mahin.toString());



//parseInt mane purno sonka
var number = 5654;
var numbers = 45;
var num = number / numbers;
console.log(parseInt(num));



// parseFloat mane dosomik sonka rakhe
var number = 5654;
var numbers = 45;
var num = number / numbers;
console.log(parseFloat(num));


//toFixed dia dosomic sonka koita dhakpe 
var num =75845;
var num1 = 76;
var mula =num / num1;
var mahin =mula.toFixed(1);
console.log(mahin);




///arraystart

// indexOf dia value koto number e ace chake kore
var number =[ 7, 33, 52, 55, 5];
console.log(number.indexOf(55));


// arrry vitore add
var mahin = ["mahin" ,"hasan", "king", "mula", "potol,", "sosa", "alu"]
mahin.unshift("gajor");
mahin.push("antor");
mahin[3] = ("mango");
mahin [8] = ("adib");
console.log(mahin);

// arrry vitor dia ber kivabe korbo
var mahin = ["mahin" ,"hasan", "king", "mula", "potol,", "sosa", "alu"]
mahin.pop();
mahin.shift();
console.log(mahin);



// if / else
var registertwmail = "mahinhasan123@gmail.com";
var password = "12345";

var login = "mahinhasan123@gmail.com"
var loginpassword= "12345";

if (registertwmail===login && password===loginpassword){
    console.log("email thike ase")
}

else{console.log("emali thik nai")}


// if/else marks sit
var marks = 1000;

if (marks >= 80 && marks <= 100){
    console.log("A+")
}
else if (marks >= 70 && marks <= 79){
    console.log("A")
}
else if (marks >= 60 && marks <= 69){
    console.log("A-")
}
else if (marks >= 40 && marks <= 49){
    console.log("B")
}
else if (marks >= 33 && marks <= 39){
    console.log("C")
}
else if (marks >= 0 && marks <= 32){
    console.log("F")
}
else {
    console.log("wrong input")
}


// tarnary oparetor
var login = "12345";
var password = "12345";

if (login === password){
    console.log("Right password")
}

else {console.log("wrong password")}
//// tarnary opretor short cart
login === password? console.log("right password") : console.log("wrong password");
var output = login === password ? "thik password": "wrong password";
console.log(output);




// for loop 
var i = 0;
for (var i = 0; i < 10; i++){
    console.log(i);
}

var names = ["alu", "potol", "sosa", "mula"]
// console.log(names.length);
for (var i = 0; i < names.length; i++){
    console.log(names[i])
}



// while loop
var i = 0;
while(i < 100){
    console.log(i);
    i++
}

 
var j =["mahin", "potol", "sosa", "mula", "alu"]
var i = 0;
while(i < j.length ){
    console.log(j[i]);
    i++
}



// function 

function add (){
    var num1 = 33;
    var num2 = 76;
    console.log(num1 + num2)
}
add()



function add (num1 ,num2){
    console.log(num1+num2)
}
add(20, 30)
add (70, 10)

function k (a , b){
    console.log(a + b)
}
k(10,10)
k(55,44)



// function array 
var names = ["mahin", "hasan", "king", "adib", "antor"];
var num = ["10", "20", "30", "40", "50"]
var number = [1, 2, 3, 4, 5, 6,7 ,7]
// for (var i = 0; i < names.length; i++){
//     console.log(names[i])
// }

function hasan(arr){
    for (var i =0; i < names.length; i++){
        console.log(arr[i])
    }
}
hasan(names)
hasan(num)
hasan(number)



var mahin = [11, 22, 33, 44, 55, 66, 77, 88, 99, 0];
var linkhon =["mahin", "hasan", "king", "raju", "potol", "alu", "sosa"];
function king(add){
    for (var i = 0; i< mahin.length; i++){
        console.log(add[i]);
    }
    
}
king(mahin)
king(linkhon)




//function

var mahin = [ 10, 20 , 30, 40 ,50, 60,70];
var hasan = ["mahin", "king", "potol", "mula"]
function add(alu){
    for (var i = 0; i < alu.length; i++)
    console.log(alu[i]);
}

add(mahin)
add (hasan)



// function return

function add (a, b , c) {
var sum = a + b + c;
return sum;


//return "mahin"
}

 var total = add(10 , 5 , 20);
 console.log(total);


// break 

var array = [34, 55, 6, 45, 34, 54, 65, 767, 787];
for (i = 0; i < array.length; i++){
    console.log(array[i])

    if ( i === 4){
        break;
    }
}

var arry = [4, 55, 66, 77, 88, 99, 11, 22, 33, 101, 103 ,642]

for (i = 0; i < arry.length; i++){
    if(arry[i] >= 100){
        break;
    }
    console.log(arry[i])
}



// continue

var arry = [4, 55, 66, 77, 88, 99, 11, 22, 33, 101, 103 ,642]

for (i = 0; i < arry.length; i++){
    if(arry[i] >= 55 && arry[i] <= 101){
        continue;
    }
    console.log(arry[i])
}



// object

let mahin = {name : "Mahin Howlader",
age: 18, 
class:"Honours 1st year"
};

// 1st system
const mahin1 = mahin.age;
console.log(mahin1)

//sceond system
const hasan =mahin["class"];
console.log(hasan)

// third system
const hasan = "class";
const hasan2 =mahin[hasan];
console.log(hasan2)


// set value
mahin.age = 20;
console.log(mahin);


mahin['age'] = 21;
console.log(mahin);

const hasan = 'age';
mahin[hasan] = 28;
console.log(mahin)

const proparty = Object.keys(mahin);
console.log(proparty);

const propartyvalue = Object.values(mahin);
console.log(propartyvalue);






// //feet inc
// function inc (add){
//     var mahin = add / 12;
//     console.log(mahin)
// }
// inc(144)

// function inc (add){
//     var mahin = add / 12;
//     return mahin;
// }
// const feet = 144
// let incFeet = inc(feet)
// console.log(incFeet)



// leap year

function leapYear (add){
    var mahin = add % 4;
    if(mahin === 0){
        console.log("LEAP YEAR " , add)
 
    }
    else{console.log("No leap year", add)}
}

leapYear(1933)

function leapYear(year){
    var sum = year % 4;
    if (sum === 0){
        return true;
    }
    else{return false;}
}

var years  = leapYear(1936);
console.log("LEAP YEAR", years)

var yearsChake = leapYear(1834)
console.log("NO LEAP YEAR", yearsChake)





















//// ZOR BIZOR

function zor (add){
    var sum = add % 2;
    if(sum === 0){
        return true;
    }
    else{return false}
}

var mahin = zor(233)
console.log(mahin)

var hasan = zor(20)
console.log(hasan)



//// function zogfol
\

function zogfol (add){
    var zog = 0
    for(i = 0; i < add.length; i++){
        var index = i;
        var hasan = add[i]
        zog = zog + hasan;
        console.log(index, hasan, zog)
    }
    return zog
}

var mahin = [12, 23, 43, 54, 5, 76, 87, 99]
zogfol(mahin)

function zogfol (add){
    var sum = 0;
    for(i =0; i < add.length; i++){
        var index = i;
        var mot = add[i];
        sum = sum + mot;
        console.log(index,mot, sum)
    }
    return sum 
}
var number = [12, 23, 34, 56, 78, 98]
zogfol(number)




for (i = 0; i <= 10 ; i++){
    console.log(i)
}


var i = 0;
while(i <= 20){
console.log(i)
i++
}



//function bigest number
function num (numbers){
    let largest = 0;
    for(i = 0; i < numbers.length; i++){
        const index = i;
        // console.log(index)
        const element = numbers[index]
        // console.log(element)
        if(element > largest){
            largest = element
        }

    }
return largest;
}
const heght = [1243,7645,5546, 67545, 4563]
const bigest = num(heght)
console.log(" the bigest number is arry",bigest)


// revers function
function reverse (text){

    let reversed = "";
    for ( let i = text.length; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element
        // console.log(element)
  

        
    }
return reversed;

}
const tittle = "I am bad boy";
const fullTittle = reverse[tittle]
console.log( fullTittle)

