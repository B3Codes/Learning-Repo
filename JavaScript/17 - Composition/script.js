function add(a,b){
  return a+b;
}


function square(val){
  return val * val;
}


function composeTwoFunction(f1, f2){  // this is generic function
  return function(a,b){
    return f2(f1(a,b));
  };
}


const task = composeTwoFunction(add, square);
console.log(task(3,4));


// This is how we will right above function in mordern js

const c2f = (f1, f2) => (a,b) => (f2(f1(a,b)));

const task2 = c2f(add, square);
console.log(task2(7,4));



/* ------ Create for Multiple/unlimited Functions ---------- */

function composeSquare(val){
  return val * val;
}

function composeSum(args){
  return args[0] + args[1];
}



function multipleCompose(...fns){
  return function(...value){
    return fns.reduceRight((a,b) => b(a), value);
  };
}

const composeTask = multipleCompose(composeSquare, composeSum);

console.log(composeTask(9,3));



// writtin above in mordern jS

const composeAll = (...fns) => (...val) => fns.reduceRight((a,b) => b(a), val);

const taskAll = composeAll(composeSquare, composeSum);

console.log(taskAll(8,2))