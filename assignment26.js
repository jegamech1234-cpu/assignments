```js
1-

let student = {
name:"jegadesh",
age:25,
grade:"A"
};

console.log(student);

2-

let car = {
    brand:"Toyoto",
    Model:Innova crysta,
    Year:2025
};

console.log(car.brand);



3-
let mobile ={
    Processor:"Qualcomm snapdragon",
    ram:"8 GB",
    Storage: "256 GB"
};


mobile.camera = "8 megapixels";

console.log(mobile);





4-
 let book = {
title:"JS fundamentals",
price:300
 };

 book.price = 500;
 console.log("updated book price is:", book)


 5-
    let employee = {
        name:"jegadeesh",
        age:25,
        position:"Programmer",
        salary:35000
    };

    if ( "salary" in employee ) {
    console.log("Salary key exists in the employee object");

    } else{
console.log("Salary key does not exist")
    }


6-
const  product = {
    name:"Macbook pro"
    price: 150000,
    discount:10
};


delete product.discount;

console.log(product);


7-
 const user = {
    name:"jegadeeshh",
    email:"jega2001m@gmail.com"
 };

 for(let key in user){
    console.log(key);
 }


8-
const dog = {
    breed:"German shepard",
    age:4
};

if ( dog.age < 2 ) {
console.log("Puppy");
} else{
console.log("Adult dog")
}





9-

const calculator = {
    num1 = 10,
    num2 = 20,
};


const sum = calculator.num1 + calculator.num2;
console.log("sum", sum);



10-

const user = {
    firstName:"Ramesh",
    lastName:"M"
};


const fullName = user.fistName + ""+ user.lastName;

console.log("fullname",fullName);



11-
const marks = {
    Tamil: 83,
    English:82,
    Maths:70,
    Science:89,
    Social:94
};

let total = 0;


for (let subject in marks) {
    total += marks[subjects];
}


console.log("Total marks:", total);



12-

const bike = {
    brand:"Yamaha",
    model:"MT-15",
    color:"blue;
};


if("color" in bike ) {
    console.log("the bike has a color property")
}else{
    console.log("the bike does not has a color property")
}

13-

const movie = {
    title:"Interstellar",
    rating:9
};

if ( movie.rating > 8) {
    console.log("it is a hit movie")
}else{
    console.log("Not a hit")
}

14-
 const account = {
    balance:1200;
 }
 account.balance  += 500;
 console.log("updated balance is:" , account.balance);


 15-
  const player = {
    Battingavg: 80,
    Bowlingavg:50,
    Wickets:40
  }
let highest =  0;

for (let stat in player) {
    if ( player [stat] > highest ){
        highest = player [stat]
    }
}
console.log("Highest stat value:", highest);


16-
const game = {
    title:"cricket",
    genre:"sports",
    players:11
    ratings:5
    price:45000,
    venue:"Virtual cricket stadium",
    date:"15-11-2025"
};

const totalKeys =  Object.keys(game).length;

console.log("Number of keys:", totalKeys);



17-const course = {
    name:"Js mastery",
    duration: "4 months",
}

course.duration = "7 months";

console.log("Updated course:", course.duration);





18-const teacher = {
    name:"Shalini",
    subject:"Javascript"
}

console.log( `${teacher.name} teaches  ${teacher.subject} `);




19-const settings = {
    theme:"Light",
    fontSize:17
}
settings.theme = "Dark";
console.log(settings.theme);



20-const shopItem = {
    name:"sunglass",
    price:2000,
}

console.log(shopItem);

if (shopItem.price > 1000) {
    console.log("Expensive");
} else {
    console.log("cheap");
}
