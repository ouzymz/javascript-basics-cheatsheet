const numbers = [3,4];

numbers.push(5,6); // sona ekler

numbers.unshift(1,2); //basa ekler


const numbers2 = [1,2,3,4];

numbers2.indexOf(numbers.indexOf(1,1)); //1. indexten baslayarak siradaki ilk elemani bulur.

console.log(numbers2.indexOf(1)===-1);
console.log(numbers.includes(1));//arrayda 1 var mi diye kontrol eder.


//FIND FUNCTION IN ARRAYS

const courses = [ {id:1,name:'a',type:'first'},{id:2,name:'b',type:'second'}];
let i=0;
const course = courses.find(function(course){
    i++;
    console.log(i);
    return course.id ===2 ;
});

console.log(course);


//ARROW FUNCTION

const courseArrow = courses.find((course)=> course.name ==='a');

console.log(courseArrow);


// REMOVUN ELEMENTS

const numbers3 = [1,2,3,4,5,6,7];

const last = numbers3.pop(); // remove from end

const first = numbers3.shift();

const middle = numbers3.splice(2,2); //Index 2'den baslayarak sirasiyla gelen 2 elemani siler.

console.log(numbers3);

//EMPTYING AN ARRAY

let numbers4 =[1,2,3,4];
let another = numbers4;

numbers4 = []; //solution 1
numbers4.length=0; //solution 2
numbers4.splice(0,numbers4.length); //solution 3

while (numbers4.length >0)
    numbers4.pop

//ITERATING AN ARRAY

const arrayIterate= [1,2,3,4,5];

for ( let number of arrayIterate) //first option
console.log(number);

arrayIterate.forEach(function(number){
    console.log(number)
});


//JOIN ELEMENTS

const joinElements =[1,2,3];
const joined = numbers.join(',');
console.log(joined);

const message = 'The message to be splitted and joined';
const parts = message.split(' ');
const combined = parts.join('~~');

console.log(combined);


//SORTING ARRAYS
 const sortingArray = [2,3,1];
sortingArray.sort();
console.log(sortingArray);

sortingArray.reverse();
console.log(sortingArray);

const sortingObject = [
    {id:1,name:'asd'},
    {id:2,name:'cvb'},
    {id:2,name:'bvm'}

];

sortingObject.sort(function(a,b){
    const nameA = a.name.toUpperCase(); //ASCII table siralamasina gore harflerin degerleri vardir bir karisiklik olmamasi icin upper case yapildi.
    const nameB = b.name.toUpperCase(); //ASCII table siralamasina gore harflerin degerleri vardir bir karisiklik olmamasi icin upper case yapildi.

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})

console.log(sortingObject);


//TESTING ELEMENT OF AN ARRAY

const testingArray = [1,2,3];

const isAllPossitive = numbers.every(function(value){
    return value >=0;
})

console.log(isAllPossitive);



const isAnyPossitive = numbers.some(function(value){
    return value >=0;
});

console.log(isAnyPossitive);

//FILTERING AN ARRAY

const filterNumber = [1,-1,2,3];

const filteredNumber = filterNumber.filter(value => value >= 0);
    
console.log(filteredNumber);

//MAPPING AN ARRAY

const mapNumber = filteredNumber.map(n => '<li>' + n + '</li>')

console.log(mapNumber);

const html = mapNumber.join(''); // '' virgul ile birlestirilmemesi icin eklendi

console.log(html);




//CHAINING METHODS : 

const chain = [1,2,3,4,5,6,7,8,9,0];

const filterMapJoinArray = chain
                                .filter(n => n%2 === 0)
                                .map(n => '<li>'+ n +'</li>');
                                
                                
console.log(filterMapJoinArray); //<li>1</li><li>2</li><li>3</li>


const deneme = filterMapJoinArray.map((n)=>{
    if(n===filterMapJoinArray[0])
    return n = '<lu>' + n;
    else  
    return n;       
}).map((n)=>{
    if(n===filterMapJoinArray[filterMapJoinArray.length-1])
    return n =  n + '</lu>';
    else  
    return n; 
}).join('');

console.log(deneme); // <lu><li>2</li><li>4</li><li>6</li><li>8</li><li>0</li></lu>


//REDUCING AN ARRAY 

const reduceArray = [1,2,3,4,5];

// a = 0, c = 1 => a =1,
// a = 1, c = 2 => a =3,
// a = 3, c = 3 => a =6,
// a = 6, c = 4 => a =10,
// a = 10, c = 5 => a =15,

const sum = reduceArray.reduce((accumulator,currentValue) => accumulator + currentValue);


console.log(sum); // 15

