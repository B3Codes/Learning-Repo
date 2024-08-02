(function add(a,b) {
  console.log(a+b);
})(2,3);

(() => console.log("Hello!"))();

const val = (() => 100)();
console.log(val);


/* ----------------------------- */

const atm = function(initialBalance){
  let balance = initialBalance;
  function withDraw(amt){
    if(amt > balance){
      return "Are u kidding!";
    } else {
      balance = balance - amt;
      return balance;
    }
  }

  return {withDraw};
};

const atmVal = atm(1000);
console.log(atmVal.withDraw(200));
