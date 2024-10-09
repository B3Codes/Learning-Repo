const { error } = require("console");
const fs = require("fs");

/* ====== Write File ====== */

// // Sync...
// fs.writeFileSync("./test.txt", "Hey! there...");

// // Async
// fs.writeFile("./test.txt", "Hey! there it's Async...", (err) => {});


/* ====== Read File ====== */

// // Sync...
// const res = fs.readFileSync("./test.txt", "UTF-8");
// console.log(res);

// // Async
// const res = fs.readFile("./test.txt","UTF-8",(err, data) => {
//   if(err){
//     console.log("Error is: " + err);
//   } else {
//     console.log(data);
//   }
// });


/* ====== Append to File ====== */

// Sync
// fs.appendFileSync("./test.txt","\nThis new data");
// const res = fs.readFileSync("./test.txt", "UTF-8");
// console.log(res);

// // Async
// fs.appendFile("./test.txt",`\nAsync append  ${new Date().getTime().toLocaleString()}`, (error, data) => {
//   if(error){
//     console.log(error);
//   } });


/* ====== Copy a File ====== */
// // Sync
// fs.copyFileSync("./test.txt","./copy.txt");

// fs.cpSync("./test.txt","./copy.txt");


/* ====== Delete a File ====== */
// Sync
// fs.unlinkSync("./copy.txt");


/* ====== get File stats ====== */
// console.log(fs.statSync("./test.txt"));


/* ====== make directory ====== */
// fs.mkdirSync("my_docsss");
// fs.mkdirSync("my_docs/a/b/", {recursive: true});


const os = require("os");
console.log(os.cpus().length);