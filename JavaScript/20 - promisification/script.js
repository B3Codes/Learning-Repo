// console.log("promisification")

// old school callback function without promise



// This function can load any script

function loadScript(src, callBack){
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => callBack(null, script)  // usually when we work with callbacks our first argument is an error
  script.onerror = (err) => callBack(err)  // passing the error to the callback
  document.head.appendChild(script);
}


// loadScript("test.js", (err, script) =>{
//   if(err){
//     console.log(err);
//   } else {
//     console.log("script loaded...");
//   }
// });



/* ----- Writting our own promisification function ----- */

function promisfy(f){
  return function(...args){ // return a wrappr-function (*)
    return new Promise((resolve, reject) => {
      function callBack(err, result){ // our custom callback for f(**)
        if(err){
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callBack); // append our custom callback to the end  of f arguments

      f.call(this, ...args); // call the original   function
    });
  };
}



// usage
let loadScriptPromise = promisfy(loadScript);

// console.log(loadScriptPromise);

// loadScriptPromise("test.js")
// .then(() => console.log("done!"))
// .catch((err) => "errror: "+err)


// using it in async await

(async () => {
  try{
    const result = await loadScriptPromise("test.js");
    console.log(result);

  }catch(err){
    console.log(err)
  }
})();