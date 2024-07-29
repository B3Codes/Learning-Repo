function init(){
  const name = "Closures!";

  function displayName(){
    console.log(name);
  }

  displayName();
}

init();



/* ------------------------------ */

function makeAdder(x){
  return function(y){
    return x+y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);


console.log(add5(2));
console.log(add10(2));



/* chnage font size on button click */

function makeSizer(size){
  return function (){
    document.getElementById("text").style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size20 = makeSizer(20);
const size30 = makeSizer(30);
const size50 = makeSizer(50);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-20").onclick = size20;
document.getElementById("size-30").onclick = size30;
document.getElementById("size-50").onclick = size50;


/* ---------------------------------------------- */

const counter = (function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }


  return {
    increment(){
      changeBy(1);
    },

    decrement(){
      changeBy(-1);
    },

    value(){
      return privateCounter;
    },
  }
})();




console.log(counter.value());

counter.increment();
counter.increment();

console.log("After increment!...");

console.log(counter.value());

console.log("After decrement!...");

counter.decrement();
console.log(counter.value());



/* ----------------------------------- */

const makeCounter = function () {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }


  return {
    increment(){
      changeBy(1);
    },

    decrement(){
      changeBy(-1);
    },

    value(){
      return privateCounter;
    },
  }
};


const counter1 = makeCounter();
const counter2 = makeCounter();

counter1.increment();
counter1.increment();

console.log("Counter1: " + counter1.value());

console.log("Counter 2: " + counter2.value());





