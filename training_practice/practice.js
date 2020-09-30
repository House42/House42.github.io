// // LEARNING OBJECTS ALREADY DONE SOME WORK ON OBJECTS
// // ARRAYS [] OBJECTS{}

// var user = {
// 	name: "Bella",
// 	age: "1",
// 	hobby:"mucking about",
// 	isMarried: false,
// 	shout: function(){
// 		console.log("AHHHHHHHH")
// 	}
// };

// user.favouriteFood ="lamby bones";

// var passwords = [
// 	{
// 		username:"Bella",
// 		password:"naps&walks"
// 	},
// 	{
// 		username:"Tina",
// 		password:"icecream"
// 	}
// ];


// FACEBOOK ARRAY
var database = [
    {
            username:"Bella",
            password:"naps"
    },
    {
        username:"Jade",
        password:"hello"
    },
    {
        username:"Tina",
        password:"stink"
    },
    {
        username:"Bob",
        password:"bab"
    }
    ];
    
    var newsFeed = [
    {
        username:"Bobby",
        timeline:"So Tired and Lazy"
    },
    {
        username:"Steve",
        timeline:"My name is so shit"
    }
    ];
    
    var userNamePrompt = prompt("whats your username?");
    var passwordPrompt = prompt("Whats your Password?");
    
    function isUserValid(username,password) {
        for (var i=0; i< database.length; i++){
        if (database[i].username === username && 
            database[i].password === password){
                return true;
            }    
        }
        return false;
    }
    
    function signIn(username, password) {
       if (isUserValid(username, password)){
        alert("welcome Back");   
        console.log(newsFeed);
       } else{
        alert("sorry wrong information");
    }
    }
    
    signIn(userNamePrompt, passwordPrompt);
    
    
    // // WHAT LEARNT JAVA JARGON:
    
    // // FuNCTION DECLARATION
     
    // function newFunction() {
    
    // }
    
    // // FUNCTION EXPRESSION
    // var newFunction = function (){
    
    // };
    
    // // EXPRESSION(SOMETHING THAT PRODUCES A VALUE)
    // 1+3;
    // var a = 2
    // return true;
    
    // // CALLING OR INVOKING A FUNCTION
    // alert()
    // newFunction(param1, param2);
    
    // // ASSIGN A VARIABLE
    // var a = true
    
    // // FUNCTION V METHOD
    // function thisIsAFunction(){
    
    // }
    
    // var obj = {
    // 	thisIsAMethod: function() {
    
    // 	}
    // }
    // // how accessed?
    // thisIsAFunction()
    // obj.thisIsAMethod()
    
    // // <___________LOOOPS________>
    
    // var todos = [
    // 	"clean room",
    // 	"brush Teeth",
    // 	"make up",
    // 	"Eat Maccas",
    // ];
    // // ADDING A ! USDING A FOR LOOP
    // for (var i=0; i < todos.length; i++) {
    // 	todos[i] = todos[i] + "!";
    // };
    
    // // OR to ensure length is accurate and loop runs corretly
    
    // var todosLength = todos.length;
    // for (var i=0; i< todosLength; i++){
    // 	todos.pop();
    // }
    
    // todos.forEach(function(i) {
    //     console.log(i);
    // })
    
    // var counterOne = 0;
    // while (counterOne < 10) {
    //     console.log(counterOne);
    //     counterOne++
    // }
    
    // var counterTwo = 10
    // do {
    //     console.log(counterTwo);
    //     counterTwo--;
    // } while counterTwo > 0);
    
    
    // // CAN I user.com
    
    function whatName(){
    var name = prompt("Hi, what is your name?")
    if (name ==="Tina"){
        alert("Hi Tina, I have heard all about you. You are bitchy old hag that has a fishy bum and smells quite atrocious.");
        }else if (name ==="Bella" || name === "Belly"){
                alert(" Hi Bella boo, I have heard all about you. Sometimes you misbehave but you are just a pup and only learning. You are a great pal especially compared to old haggy T who is very very old and comes from ancient greece. Thats why she is greasy. But you are pretty and smell nice. Nice to meet you can we be pals belly boo? ");
        }else if (name==="Jade"){
                alert("WWOOOOOOOW!!! I have heard about you your mazing. Can I please say you are the greatest person ever. can I have a autograph and be your pal?? PLEEAAASSSEE??");
        }else {
                alert("hi " + name + " sorry I dont know you. But you cant be as bad as stinky T so we can be pals");
     }
    }
    
    // function sayHello(){
    //     console.log("Hello");
    // }
    // sayHello();
    
    // function sing(song){
    //     console.log(song);
    // }
    
    // sing("ladeeedaaaa");
    // sing("LAAAAAAA!");
    
    // FUNCTION
    function checkDriverAge(){
        var age = prompt("What is your age?");
    
        if (Number(age) < 18) {
            alert("Sorry, you are too yound to drive this car. Powering off");
        } else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
        } else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
        
    }
    checkDriverAge();
    
    function checkDriverAge2(age){
        if (Number(age) === 92) {
            alert("Powering On. Enjoy the ride!");
        } else if (Number(age)!== 92) {
            console.log("Congratulations on your first year of driving. Enjoy the ride!");
        }    
    }
    // ARRAYS
    var list=["tiger","cat","bear", "bird"];
    console.log(list[1]);
    
    SEE JAVASCRIPT KEYWORDS
    
    // DOM SELECTORS REFER TO DOCUMENT PAGE (WITH WINDOW PARENT ELEMENT) THAT PUTS THE CSS HTML AND JAVA TOGETHER. 
    // THERE ARE METHODS AND FUNCTIONS ALREADY EXISTING NI DOM SELECTORS
    // EG
    document.getElementsByTagName
    document.getElementsByClassName
    document.querySelectorAll
    // using multiple Eg
    document.querySelector("li").getAttribute("a");
    document.querySelector("li").setAttribute("b");
    DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

##Changing Styles
style.{property} //ok

className //best
classList //best

classList.add
classList.remove
classList.toggle

##Bonus
innerHTML //DANGEROUS

parentElement
children

##It is important to CACHE selectors in variables

// PRACTICE GET ELEMENT BY >>> DOM EVENTS
// A FUNCTIONAL BUTTON FOR SHOPPING LIST
// -------------------------------------

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""  
        // (empties string to stop continuous adding of same input)
    }
})

input.addEventListener("keypress", function(event){    
    // BY using keycode 13 it listens for event of pressing enter
    if (input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""  
    }
})

// ABOVE CODE CAN BE TIDIED UP BY USING THE FOLLOWING FUNCTIONS TO DRY CODE
// -----------------------------------------

function inputlength(){
    return input.value.length;
}
function createListElement(){
    if (input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""  
    }
}

// THE CODE CAN THEN BE SHORTENED TO THE FOLLOWING:
// ----------------------------------

function addListAfterClick(){  
    if (inputlength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event){  
    if (inputlength > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
// Note above addlist functions are callback functions with no () as we 
// want them to run as soon as an event happens not straight await. the 
// press or click is the ()

var css = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value + ", "
    + color2.value + ")";
    css.textContent = body.style.background + ";";
}

html:
<input type="color" name="color1" value="#00ff00"></input>
<input type="color" name="color2" value="#00ff00"></input>