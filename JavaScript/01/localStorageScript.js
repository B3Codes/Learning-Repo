const inputName = document.getElementById("input-username");
const inputBtn = document.getElementById("submitNameBtn");
const userName = document.getElementById('userName');

userName.innerText = localStorage.getItem("name");


inputBtn.addEventListener("click", () => {
  localStorage.setItem("name",inputName.value);
  location.reload();
   
})

window.addEventListener("load", ()=>{
  userName.innerText = localStorage.getItem("name");
})