### Frontend

#### HTML:

Every thing is enclosed in html tag.
Firstly learn tags then dont forget to learn SEO later.
We have two types of elements :

1. Block elements(takes up whole space)
2. Inlined elements(accomodates the space)
   h1,p,div - block elements(which takes who width)

hr - line


any tag is of form:

```
<tag attribute="value"></tag>
```

#### Basic Tags:

```
anchor - <a></a>to link with href
img - attributes(controls, autoplay, muted)
video - attributes(controls, autoplay, muted)
audio - attributes(controls, autoplay, muted)
table -
    <table>
    <thead>
    <!-- this is head of the table meaning heading row of 3 colums each column heading is <th> tag -->
        <tr>
        <th>FOOD</th>
        <th>BODY</th>
        <th>HEIGHT</th>
        </tr>
    </thead>
    <tbody>
    <!-- This is body of the table meaning which emphasizes that the values of the table head are filled according with <td> as the tag      -->
        <tr>
        <td>FOOD</td>
        <td>BODY</td>
        <td>HEIGHT</td>
        </tr>

        <tr>
        <td>FOOD</td>
        <td>BODY</td>
        <td>HEIGHT</td>
        </tr>

        <tr>
        <td>FOOD</td>
        <td>BODY</td>
        <td>HEIGHT</td>
        </tr>
    </tbody>
    </table>
non-sematic tags:
<div>
<span>



sematic tags:
purposeful tag
<header>
<section>
<article>
<details>
<figure>
<main>
<nav>
<aside>
<footer>

```

#### CSS:

1. Inline

```
<div style="color:black">Hello</div>
```

2. Internal

```
<style>
h1{
    color:black;
}
</style>
<body>
<h1>Hello</h1>
</body>
```

3. External

```
<link rel="stylesheet" href="style.css">
```

#### Box Model -

### margin > border > padding > width

### shorthand CSS:

**_ overflow : auto _** (thank later )

#### 1. Background

    background-color
    background-image -url
    background-repeat - (repeat, no-repeat)
    background-attachment
    background-position (cover, auto, contain, custom)

Example :

background: #000 url("./img.jpg") cover fixed;

#### 2. Border

    border-width
    border-style
    border-color

Example :

border: 1px solid #000

#### 3. Margin :

     It is something which creates some space around elements outside border

#### 4. Padding :

    It is something which creates some space around elements content.
    padding: top right bottom left
    padding: top-bottom right-left

#### 5. Height and Width:

    This is most underrated attribute which creates an impact when css fixes are disgusting.well, the point is

    auto - default(browser does the task of calculation)
    lenght - in px, cm etc
    % - percentage
    initial - default value
    inherit - parent

#### 5. outline -

    It is drawn around elements to make element stand out

eg: dotted, dashed, solid etc (none and hidden which I use the most)

#### 6. Text -

    1- color is the property
    2- text-align - (center, left, right)
    	justify - make sure that every line is even
    3-text deocration -
    	overline - this is over the line
    	line-through - cut etc
    4-text transformation - uppercase, lowercase, capitalize
    5-text spacing - letterspacing, lineheight, textindent, whitespace, wordspacing

#### 7. Fonts -

    Generic font families:
    serif, sans-serif, monospace, cursive, fantasy.

Display Properties(layout):
block - these elements takes up full width(div, h1, p, form, header, footer, section)
inline - these donot start new line instead takes necessary amount of width(span, a, img)
none - show and hide - this ends both element and space
visibility - hidden - this only hides but still have space

#### 8. MaxWidth -

    it is property to limit the width for smaller screens

#### 9. centering a div(block) -

    . parent(relative) child(absolute, top-50%, left-50%, transform:translate(-50%,-50%))
    . flex justify-content:center align-items:center
    . padding(top and bottom) text-center

#### 10. Combinators -

    space, >, +, ~

#### 11. Pseudo Class -

    syntax: selector:pseudoclass{propety:value}

### CSS Concepts:

#### Units:

##### px -

custom value

##### rem -

it is with respect to the root that means html referenced values.
suppose, html has font-size:16px then 2rem means 2 times of that value which is very viable during build time.

##### em -

It is basically n times,
2em is 200% i.e. 2 times of the parent not the root

##### vw -

view width

##### vh -

viewport height

#### relative - Parental or root

#### absolute - what ever you want

### layouts:

There are basically 4 layouts:

1. Block - for sections(div, header, section..)
2. Inline - for text or stuff
3. Table - 2D data
4. Positioned - explicit position

#### Apart from these layouts to make an easier version to handle responsive struct we introduce 👇

### Flex Box :

Flex is property to maintain the container to follow a set of rules to make UI way better handy and responsive.
well, the properties are:

1. Flex-direction
2. flex-wrap - to wrap it or not
3. flex-flow - shorthand for both direction and wrap
4. justify-content - It refernces the main axis(mostly x unless specified)
   -> center
   -> flex-start
   -> flex-end
   -> space-around
   -> space-between
5. align-items - It refers with subordinate axis(mostly y-axis)
   -> center
   -> flex-start
   -> flex-end
   -> stretch
   -> baseline
6. align-content - modifies the behavior of flex-wrap (you didn't get it so ask expert)
7. align-self - overrides align-items

### Grids:

#### grid-templates-rows - number of rows in grid

#### grid-templates-columns - number of columns

grid row and grid column etc

### Transform, Animation, Transistion

#### Transistion

transistion : property duration timing-function delay

eg: transistion : width 2s linear 1s

#### Transform

translate()
rotate()
scale()
skew()
matrix() - no use

#### animation

Firstly,
@keyframes myanimation{
either
to{

    }
    from{

    }


    or

    0%{
    }
    50%{

    }
    100%{

    }

}

Then,
animation : myanimation 10s linear 1s infinite

#### Pseudo classes and Pseudo Elements

::before{
content:"",

}
::after{
content:""
}

### Javascript

##### Javascript It is programming language for web which makes it different from other programming languages is it can update and change HTML and CSS which can validate and manipulate data(dom manipulation) It can change HTML styles and attributes. It has got many versions, the current version is ES6

_*tip question*:(what gets added on each version?) so, it updates the current version by adding new additions such as let, const, Array.find etc_

c++ and other languages are compiled language whereas javascript is interpreted language, so it skips the phase and directly run.

_A compiled language is converted into machine code so that the processor can execute it. An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language. The compiled programs run faster than interpreted programs. // Script: Well started by creating index.html just to give an alert as_

Every browser has its own javascript engine like google chrome has v8, mozilla has spidermonkey

#### Javascript is single thread synchronous language

This means that it executes one line at a time and unless the previous task is done it cannot execute the other.

### Javascript behind the scenes

1. Execution Context
2. Call Stack(Exection Context Stack)
3.

#### Call stack

#### Execution context

When the javascript engine scans a script file it makes an environment calles execution context which handles the entire transformation and execution of the code.
As the context run the parser parses the code and allocates the memory for the variables and functions.

Well, we have global and function execution context , also one thing that global execution context is created when the javascript starts to run which represents global scope, on top of which local scopes are called.

Now when each execution context is called we have,

1. Creation Phase -
   This is creation of the context which sets up the environment like it determines the variables and functions and scope chain and allocates the memory for the variables
2. Execution Phase -
   Javascript engine executes the code line by line and this includes evaluating and executing statements.

Even if it is execution context of the global or functional we have every context of this type,

```



```

#### Asynchronous function

We can make javascript as an asynchronous because why we wait for the unwanted task to block the line instead ask javascript to make another way to to multitask until the unwanted task gets completed come back to way.

Well to make javascript asyncronous we must know,

1. Callback
2. Promise
3. Async Await

Whenever we are trying to make javascript work asynchronously there is a lot complexities we encounter and dealing with those creates a new complexity. well, all in all we must clear the concepts very clear while we actually deep dive in javascript.

Starting with a simple statement,
Callback - It is function passed as an argument to another function. This technique allows a function to call another function.
Higher order Functions -
It is function which takes a function as an argument.
Ex:map,filter,reduce and build custom

well this seems a bit of the whole but we have got something complex i.e. callback hell
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg"></img>

to make the code readable and maitain integrity we must understand one thing that we must get out of this call back hell which is inversion control and that can only be solved using some sort of promises which on completely satisfying proceed further.

The best example of code is as,

```

const gameList = [];
const fetchData = (callback) => {
  setTimeout(
    (callback) => {
      gameList.push(
        {
          name: "game 1",
          id: "xsdasdsda",
        },
        {
          name: "game 2",
          id: "csdsddasdsda",
        },
        {
          name: "game 3",
          id: "zsdasdsda",
        }
      );
      callback();
      console.log("This is console log after fetching");
    },
    4000,
    callback
  );
};

const displayGame = () =>
  setTimeout(() => {
    for (let i = 0; i < gameList.length; i++) {
      console.log(i);
    }
    console.log("console log after displaying");
  }, 1000);

fetchData(displayGame);


```

This is good practise to use higher order functions, callbacks in the code but in the long run we might encounter callback inside a callback and this goes like a chain.

The best example I can give you is a real-life -
consider an e-commerce website to order products:

1. You add the products to cart
2. You apply coupon
3. you add payment method
4. you proceed paying the amount
5. your order gets placed and you gets the info on the dashboard
6. you are kept updated in the procedure.

Well, how callbacks are important in this aspect as a chain has been formed to fulfill the procedure successfully but there is risk in this aspect callback may fail or might not happen at any point. then what to do ?

Here comes the callback hell where it must encounter the later steps as well which is very wrong in the code.

Here comes the alternative that we introduce the concept of promise.

#### Promise

Promise is an object of javascript which eventually return success or failure of the event asynchronously.

syntax:

```
const promise = new Promise((resolve, reject)=>{
    let success = false;
    if(success) resolve("Promise fulfilled");
    else reject("there is an error");
});

a.then((e)=>console.log(e))
.catch((e)=>console.log(e));
```

let's consider another case where we add user in real time as he register to our portal

```
const users=[];

const fetchData = (arr=[])=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push({name:"hameed"});
            if(arr.lenght>0) resolve("Fetched successfully");
            else reject("User not added");
        },2000);
    });
};

fetchData(arr)
    .then((mes)=>console.log(mes))
    .catch((mes)=>console.log(mes))
    .finally((mes)=>console.log("iam to kabhi bhi execute hotu"));
```

Technically after learning callbacks, async, promise we must learn AJAX, JQuery but in the modern javascript we crushed them out and figured out an easy way that is fetch()

#### fetch

this returns a promise upon fulfilment gives a successful console or on failure gives fail

```
consider an url,
const url="https://www.github.com/hameedg"

const fetchData = ()=>{
    fetch(url)
        .then((res)=>res.json())
        .then((data)=>data.pic)
        .catch((err)=>err)
        .finally(()=>console)
};

fetchData();
```
#### Async await





<!-- <script src="script.js" defer> alert("hello hameed") </script> -->

### Keywords: these are reserved words of javascript

1. var - declare a variable
2. let - block variable
3. const - block constant
4. if - block of statements to execute for the condition.
5. switch - different cases
6. for - loop
7. function - to declare a function
8. return - exits function
9. try - error handling
   (long, int public.......there are a lot)

Javascript has <b style="font-size:1rem">fixed values(literals)</b> and <b style="font-size:1rem">variable values</b>

1. Literals: Numbers, Strings, Boolean, Array, Object
2. Variables: let, const, var

##### Variables are containers for storing data and they can be done in 4 ways

1. var -
2. const - block scope and preferable use when type is array, object, function.
3. let - block scope and they are not re-declared(let x = 40 then later in the script do not declare as let x =50 instead go for x=50)

##### Block scope- before es6 javascript had global scope and function scope but after es6 and let this amended the scope types with addition of block scope. it is variable which can used inside the blocks itself which is contrary with var keyword.

##### Declare a variable:

1. It should start with letter or \_ or $
2. They are case sensitive
3. They should not contain space

##### Javascript Datatypes:

1. String - "hello"
2. Number - 23
3. Bigint - 233333322
4. Boolean - true
5. undefined - a variable without a value and typeof is also undefined
6. null - void
7. Object--->object({name:"hameed"}), array, _date(new Date("2023-07-11"))_
   _new Date(year,month,day,hours,minutes,seconds,ms)_

#### more about object and pass by reference property of it

Well, most of you still gets disturbed by what is pass by value and pass by reference. so here I am,

### Pass by value

Here the value is passed which specifies that a particular value of the variable or datatype is passed. so once value is passed, the passed value is stored till the end even if the origin of the value(I mean the provider who passed the value) is changed it doesn't affect the passed value.

But when it comes to <b style="font-size:2rem">Pass by reference</b> it is a pointer to the value infact it is the address which we are looking so if the value is changed as we are pointing to the address we refer to the changed value.

Most common example is,

```
let a =20;
let b = a;


console.log(a);
console.log(b);

a = 21;
console.log(a);
console.log(b);


output :
20
20
21
20//here the value is stored not the reference
as all primitive datatypes are passed by value
primitive datatypes(Number,String,Boolean,undefined,null);


but when the object datatype comes into picture,

let a = {
    name:"adil",
    surname:"saberi",

}
let b = a ;

console.log(a);
console.log(b);

a.name="hameed";
console.log(a);
console.log(b);

output:
{name:adil,surname:saberi}
{name:adil,surname:saberi}
{name:hameed,surname:saberi}
{name:hameed,surname:saberi}//here b is pointing to 'a' address which emphasizes the fact that the value would alters as the reference is initiated from the object datatype.


```

##### Type conversion

1. String(a)
2. a.toString()
3. Number(a)

##### Strings and its methods

###### Strings : strings can be generally written in '' or "".

##### "We are the so-called "Vikings" from the north."

the above statement is misunderstand so to avoid this,

###### use backslash is an alternative as, "We are the so-called \"Vikings\" from the north."

##### String methods:

1. string.length - to find length
2. slice(start,end) - returns the string from start+1 to end
3. splice -
4. substring - same as slice
5. trim-omits all white spaces
6. split - converts to an array at spaces, or condition so is given
7. includes - returns true if it exits

string search methods:

indexOf() lastIndexOf()

##### Display data in javascript

###### Javascript can display data in:

1. innerHTML - to access HTML element document.getElementById("id").innerHTML ="value"
2. document.write() - not required.
3. window.alert() - alert and all.
4. console.log() - simple

###### Basic comparison operators:

1. (==) equal
2. (===) equal to type
3. type (!=) not equal
4. (!==) not equal and type

#### Arrays

let arr= [];
let arr = new Array();

##### Array Methods:

1. push - arr.push(something);
2. pop - arr.pop(){this pops only last element}
3. shift - arr.shift(){first element gayab}
4. unshift - arr.unshift(){first element pe add}
5. splice - arr.splice(index,value)
6. slice - makes a new array of sliced values
7. find - searches with condition(you can pass by index as well, (value,index))
8. filter - searches with condition but here you get all those elements with applied condition.
   _Well, the only difference between find and filter is find returns one value and filter returns an array of found values_
9. every - boolean of the condition
10. some - checks if exists
11. forEach - for every element array it alters
    <!-- arr.forEach((value,index)=>{
    console.log(value,index)
    }) -->
12. map - for every element array it alters and gives an array
    <!-- const resultArray = arr.map((value,index)=>{
        return value+20;
    }) -->
13. reduce - it reduces the task and returns the operation you want as a result.

     <!-- const result = arr.reduce((total,value,index)=>{
        return total+value;
     }) -->

14.

#### Javascript functions

Javascript function is called or invoked when an event occurs as all the functions are usually written in javascript file(i.e. .js extension) So scripts are added in head or body to get accessed. This can be done in three ways

1. link
2. external
3. internal

Functions: () operator - this invokes the function // add()

#### ways to declare a function

function hello(){
console.log("hello");
}
const myfunc = () = >{
console.log("arrow function");
}

#### Scoping

Scoping are basically 3 types:

1. Global scope and their variables are accessible outside the scope as well such as var once declared can be used throughout application.
2. Function scope - they are fuction specific
3. block - {} and they are let and const.

#### DOM

window is whole DOM but if you are interested in some particular class, id or tag then follow the below rules:

###### Id selector

const id = document.getElementById("thisisid")
id.style.background = "red";
_All styles can be done_

###### query selector

const query = document.querySelector(".class"or"#id"or"h1");

const allButtons = document.querySelectorAll("button");

allButton[0] //first button and soon

###### create element

document.createElement("h2");
appendChild();

##### Event Listeners

1. click
2. submit
3. classList.add(yah yah it's not event listener just i added to remember😂)
4. context menu - this is right click
   well, you might wonder that right click has its own properties to show so, here comes the e.preventDefault()
5. mouseover etcc....

##### Math functions

1. Math.round()
2. Math.floor()
3. Math.ceil()
4. Math.trunc() - removes fraction
5. Math.sign()
6. Math.power(x,n)
7. Math.sqrt()
8. Math.abs()
9. Math.PI
10. Math.random() - It selects from 0 to 1

##### Date

const a = new Date();

<!-- it shows whole date with all stuff -->

const b = new Date(year,month,day,hour,minutes, second, milliseconds);

<!-- to show you what is what -->

##### Session Storage

It lets you store key/value pair in the browser and the data is stored for only one session.
As, discussed above that whatever object is selected in dom is a window object but this window is accesible throught the DOM.
Well, to get a clear vision of the whole stuff

```
window.sessionStorage
or
sessionStorage

It basically have three things to learn:
1. sessionStorage.setItem("keyname","value");
2. sessionStorage.getItem("keyname");
3. sessionStorage.removeItem("keyname");
4. sessionStorage.clear()
```

##### Local storage

It is same but the only difference is this stores forever.

#### Note one thing when send data stringify and get parse JSON

#### Set timeout

It is basically a function which gets called only when the number of milliseconds end.
well, the point here is settimeout executes once.
If you wish to make it a loop use setInterval
and its syntax would be,

```
setTimeout(function,milliseconds,params1, params2,...);

example:

function myFunc(name,income){
    console.log(`my name is ${name} and my income is $${income}`)
}

setTimeout(myFunc,2000,"hameed",3000);
```

to exit from timeout or timeinterval
get the id of timeout or interval as,

#### const id = setTimeout(func,milliseconds,params);

or

#### const id = setInterval(func,milliseconds,params);

then,
clearTimeout(id);
clearInterval(id);

#### OOPS

### Clases:

Classes are the templates for creating Objects they encapsulates the data. It has a similar pov of the function as declaraion, expression.

```
class First{
    constructor(height,weight){
        this.height = height;
        this.weight = weight;
    }

}
//this is first type of declartion
//console.log(First);---->{all properties, methods as named First}

const second = class{
        constructor(height,weight){
        this.height = height;
        this.weight = weight;
    }
}
//this is second type to declare as expression
//console.log(second)--->{all properties,methods as named second}

const third = class First{
     constructor(height,weight){
        this.height = height;
        this.weight = weight;
    }
}
//this is third type of declaration
//console.log(third)---->{all properties, methods as named First}
```

### class element has 3 aspects:

1. Getter, setter, method.
2. static, instance
3. public or private

###### Constructor is a special function of the class which has the same name as of the class

###### Methods are defined as,

1. plain functions
2. async functions
3. generator

##### private are used only in classes

1. declared as #name
2. used as this.#name

##### extends

suppose you wish to create a class of type Fourth but you remember all things which you want in Fourth is already in First and few needs to get added that's it, so what you do is use the class First and just extend with additional properties with super function in constructor which basically allows you to use the properties and hence it down from parent to child as,

```
class Fourth extends First{
    constructor(height,weight,color,nature){
        super(height,weight);
        this.color = color;
        this.nature = nature;
    }
}
```

hoisting: The concept of hoisting is declaring all variables at the top but are not initialised but understood, and if you are trying to access values of let and const which are not initialised it goes into temporal dead zone which throws Reference Error.

this keyword: owner of the function, this is an object which owns functions in it

Common HTML events: onchange onclick onmouseover onmouseout onkeydown onload

#### React:

It is Javascript library developed by Facebook to create faster user interfaces for websites and applications.
React is a library which has it's usecase to deploy SPA on which we can build reuasable components

But you developers out there should know that react is not every problem solution, depending on the problem statement we must decide the best of what we have.....

1. React: SPA
2. NextJs: server rendered website with nodejs
3. Gatsby: static content website

So, be smart to choose what framework or library you require.

### note:React supports node>=14.0.0 and npm>=5.6

## Installation

```
npx create-react-app appname
cd appname
npm start
```

The above command just creates a frontend pipeline not backend logic or database.but under the hood it uses babel and webpack

### Webpack

It is something which bundles out the file which are deployed and set input and entry level file(app.js) to output, so it basically access the files and display as webapplication.
This also includes loaders, uglify etc to render the files in the process of bundling to make file as small as possible and optimised.

### React Toolchain

It consists of 3 chains:

1. package manager - npm(to install third party packages, and update them)
2. bundler - webpack(it lets you write modular code and bundle it together into small packages to optimize load time)
3. compiler - babel to write modern javascript

### Crossorigin

It is mechanism which allows websites to access data from one url to another url.
It is a policy which blocks the request which is being done from another url.
When a browser requests it has origin header to that request message

##### So, how does it goes?

The process goes with first request from the browser which wants to access the data from another url so it requests with some origin as,

```
frontend url: localhost:3000
origin:http://localhost:5000
```

Then when the server receives the request if and only if its access-control-allow-origin matches with frontend origin which satisfies the cors and allows the access as,

```
backend url
Access-Control-Allow-Origin:localhost:5000
content-type:application/json

```

### JSX

It is a syntax extension to javascript, it also remind you of template and it produces react elements.
The best example I personally think is,

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
This has clear cut with,

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### Quick Overview:

1. React Components must begin with a capital letter which makes it different from HTML tags that usually begin with a small letter.
2. export default keyword is the main component of the file. well, other functions which are built in the same file can also be exported using export const functionname, or if only function is declared as const functionname then end of the file should include export {functionname}.
3. React can change how you think about designs as you break into components.

#### How we think in react:

### The Best I could say you is strengthen your basics as hard as you can in javascript because react just makes the process fast so first know the process then make ways to optimize it.

#### Start with Header and tab fix to retrieve the address to icons(home, account, add, search)
