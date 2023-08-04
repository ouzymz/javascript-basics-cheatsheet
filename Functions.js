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


