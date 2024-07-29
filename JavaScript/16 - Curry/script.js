/* --------- Currying----------- */

function add(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}

console.log(add(1)(2)(3));



/* --------------------------- */


function curry(f){
  return function(a){
    return function(b){
      return f(a,b);
    };
  };
}


function sum(a,b){
  return a+b;

}

let currySum = curry(sum);

console.log(currySum(1)(2));



/* ------------------------- */

// function sendAutoMail(to){
//   return function(subject){
//     return function(body){
//       console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
//     };
//   };
// }


// let step1 = sendAutoMail("xyz@mail.com");
// let step2 = step1("New Order Confirmation");
// step2("Hey this is an order confirmation mail!")

// or

const sendAutoMail = (to) => (subject) => (body) => `Sending Email to ${to} with subject ${subject}: ${body}`;


let step1 = sendAutoMail("xyz@mail.com");
let step2 = step1("New Order Confirmation");
let step3 = step2("Hey this is an order confirmation mail!")


console.log(step3);



