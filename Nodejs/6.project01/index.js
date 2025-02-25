const express = require('express');
const fs = require("fs");
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

// Middleware - Plugin
app.use(express.urlencoded({extended:false}));

const writeUserToFile = (users) => {
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users), (err, data) => {
    // return res.json({status:"Success!", id: users.length});
  });
}

// Routes

app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});
  


app.get("/api/users", (req, res) =>{
  return res.json(users);
})

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})
.patch((req, res) => {
  // TODO: edit the user with id
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if(userIndex === -1)
      return res.status(400).json({error: "user not found!"});
  
  // const body = req.body;
  const updatedUser = {...users[userIndex], ...req.body};
  users[userIndex] = updatedUser; 
  // console.log(body);
  writeUserToFile(users);

  return res.json({status:"Success!", updatedUser});
})
.delete((req, res) => {
  // TODO: delete the user with id
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === id);
  if(userIndex === -1)
      return res.status(400).json({error: "user not found!"});

  users.splice(userIndex,1);
  writeUserToFile(users);
  
  return res.json({status:"pending"});
})

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user)
// })


app.post("/api/users", (req, res) => {
  // TODO: create new user
  const body = req.body;
  users.push({...body, id:users.length + 1})
  
  writeUserToFile(users);
  // console.log(body);
  // return res.json({status: "pending"});
});

// app.patch("/api/users/:id", (req, res) => {
//   // TODO: edit the user with id
//   return res.json({status:"pending"});
// })


// app.delete("/api/users/:id", (req, res) => {
//   // TODO: delete the user with id
//   return res.json({status:"pending"});
// })


app.listen(PORT, () => {console.log(`Server started at port: ${PORT}`)});