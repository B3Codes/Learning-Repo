const colorCodeTag = document.getElementById('color-code');
const optionContainer = document.getElementById('options-container');
let scoreContainer = document.getElementById('score');
let score = 0;

let randomColor;

function incrementScore(){
  score++;
}

function validateResult(el){
  // console.log(el);
  // console.log(el.target.style.backgroundColor);
  const selectedColor = el.target.style.backgroundColor;
  if(selectedColor === randomColor){
    incrementScore();
  } else {
    score = 0;
  }

  window.localStorage.setItem("score", score); 
  startGame();
  // colorCodeTag.innerText = el.target.style.backgroundColor;
  // colorCodeTag.style.color = el.target.style.backgroundColor;
}

function generateRandomNum(min, max){
  return min + Math.floor(Math.random() * (max - min));
}
function generateColorCode(){
  const red = generateRandomNum(0,255);
  const green = generateRandomNum(0,255);
  const blue = generateRandomNum(0,255);


  return `rgb(${red}, ${green}, ${blue})`;

  

}

function startGame(){
  score = window.localStorage.getItem("score") ?? 0;
  scoreContainer.innerText = score;
  optionContainer.innerHTML = null;
  randomColor = generateColorCode();

  colorCodeTag.innerText = randomColor;

  const randomIndex = generateRandomNum(0,5);

  for(let i = 0;i<6;i++){
    const div = document.createElement("div");

    div.addEventListener('click', validateResult);
    // div.style.height = "45px";
    // div.style.width = "45px";
    // div.style.margin = "10px";
    // div.style.borderRadius = "10px";
    div.style.backgroundColor = i === randomIndex? randomColor : generateColorCode();
    // console.log(div.style.backgroundColor);
    optionContainer.append(div);
  }
}




// document.onload(generateColorCode());

window.addEventListener('load',() => startGame());