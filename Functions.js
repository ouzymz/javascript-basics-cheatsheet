//FUNCTION DECARATIONS

walk(); //declere edildigi satirin ustunde de calisir

function walk() {
    console.log('walk');
}


//FUNCTION EXPRESSION

// run(); //declere edildigi satirin ustunde calismaz

let run = function () {
    console.log('run');
};

let move = run;
run();
move();

//ARGUMENTS

function sum (a,b){
    return a+b; // 1 + undefined = undefined
}

console.log(sum(1)); // returns undefined

console.log(sum(1,2,3,4,5)); //ilk ikisini alir.

//REST OPERATOR

// '...args'   :  argumentin array oldugunu tanimlar
 
function sum2 (...args){
    return args.reduce((a,b) => a+b);
}

console.log(sum2(1,2,3,4,5,6)); 

//DEFAULT PARAMETERS:


function interest(principal, rate =3.5, years=5){
    return principal * rate / years; 
}

console.log(interest(1000));

//GETTERS AND SETTERS

person = {
    stName : "Oguzhan",
    tName : "Yilmaz",
    get fullName() {
        return `${stName} ${tName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string'){
            throw new Error('Value is not a string.!');
        };

        const parts = value.split(' ');

        if(parts.length !== 2){
            throw new Error('Name or lastname is not entered properly.!');
        };


        this.stName = parts[0];
        this.tName = parts[1];
    }

};

person.fullName = 'Irmak Karslioglu'; //set metodu calisti ve otomaitk olarak set methodu icindeki scope işlenmiş oldu. 

console.log(person);


//TRY CATCH METHOD.
// try {person.fullName = '';}
try {
    person.fullName = null;
}
catch (e){
    alert(e)
};
  

