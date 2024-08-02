
// Normal   for...of loop

// for(const val of [1,2,3,4,5]){
//   console.log(val);
// }


// Iterators | Iterator Pattern

// function makeIterator(start = 0, end = Infinity, step = 1){
//   let nextIndex = start;
//   let iteratorCout = 0;

//   const rangeIterator = {
//     next(){
//       let result;

//       if(nextIndex < end){
//         result = {value: nextIndex, done: false};
//         nextIndex += step;
//         iteratorCout++;
//         return result;
//       }

//       return {value: iteratorCout, done: true};
//     },
//   };

//   return rangeIterator;

// }


// const iter = makeIterator(1, 10, 1);
// let result = iter.next;
// while(!result.done){
//   console.log(result.value);
//   result = iter.next();
// }



// /* ----- Yield ----- */

// console.log("----- Yield -----")

// function* foo(index){
//   while(index < 50){
//     const step  = yield index++;
//     // index++;

//     if(step){
//       index += step
//     }
//   }
// }

// const iterator = foo(0);

// console.log(iterator.next().value)

// console.log(iterator.next().value)

// console.log(iterator.next().value)

// console.log(iterator.next().value)

// console.log(iterator.next(10).value)

// console.log(iterator.next().value)

// console.log(iterator.next(20).value)


// /* ----- Yield* ----- */

// console.log("----- Yield* -----")

// function* f2(){
//   yield 42;
// }


// function* f1(){
//   yield* f2();
// }


// const itr =  f1();
// console.log(itr.next().value)



// console.log("-------------------")

// function* fun1(){
//   yield 2;
//   yield 3;
//   yield 4;
// }


// function* fun2(){
//   yield 1;
//   yield* fun1();
//   yield 5;
// }

// const gen =  fun2();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// /* ----- Other Iterable objects ----- */

// console.log("----- Other Iterable objects -----")

// function* f3(...args){
//   yield* [1,2];
//   yield* "34";
//   yield* args;
// }


// const obj = f3(5,6, 7, 8, "abc", '9');

// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())



// /* ----- The value of yield* expression itself ----- */

// function* f4(){
//   yield* [1,2,3]
//   return "Foo";
// }

// function* f5(){
//   const f4ReturnVal = yield* f4();
//   console.log(f4ReturnVal);

//   return f4ReturnVal;
// }


// const f4gen = f5();

// console.log(f4gen.next())
// console.log(f4gen.next())
// console.log(f4gen.next())
// console.log(f4gen.next())
// console.log(f4gen.next())
// console.log(f4gen.next())
// console.log(f4gen.next())




// /* ----- Generator example ----- */

// console.log("----- Generator example -----")

// function* mageRangeIterator(start = 0, end = Infinity, step = 1){
//   let iteratorCount = 0;

//   for(let i = start;i < end;i++){
//     iteratorCount++;

//     yield i;
//   }

//   return iteratorCount;
// }


// const genr = mageRangeIterator(1,10,1);
// while(!genr.done){
//   console.log(genr.next())
// }



/* ----- User-defined Iterators ----- */

/* 
  - for an object to be an iterator,
  it must implemnet the [symbol.iterator]() method
*/

console.log(" ----- User-defined Iterators ----- ")

// 


const myIterator =  {
  *[Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
};

for(const val of myIterator){
  console.log(val);
}