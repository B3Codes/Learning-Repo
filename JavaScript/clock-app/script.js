function showTime(){
  const time = new Date();
  const currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  document.getElementById("time-txt").innerText = currentTime;
}

/* 
  show time after 5 second 
  setTimeout will call showTime only once

*/

// setTimeout(showTime, 5000);  


/* 
  update/refresh time after every 1 second 
  setInterval will call showTime after every 1 second

*/

const interval = setInterval(showTime, 1000);

const btn = document.getElementById("clear-btn");
btn.addEventListener("click",()=>{
  clearInterval(interval);
})


const timerBtn = document.getElementById("timer-btn");
const timerTxt = document.getElementById("timer-txt");

let count = 0;

let active = false;

// const timerInterval = setInterval(++count, 1000);

function setTimer(){
  ++count;
  timerTxt.innerText = count;
}

timerBtn.addEventListener("click",()=>{
  let timerInterval;
  if(!active){
    timerInterval = setInterval(setTimer, 1000);
    timerBtn.innerText = "Stop";
    active = true;

    // startCounter();
  } else {
    clearInterval(timerInterval);
    count = 0;
    timerTxt.innerText = count;
    timerBtn.innerText = "Start";
    active = false;
    // stopCounter();
  }
})





// showTime();