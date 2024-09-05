import React from 'react';

const time = new Date();
const day = time.toLocaleString("en-us", {weekday: "long"});
const morning = time.getHours >=6 && time.getHours <= 11  ;

let dayMsg;

if(day.toLowerCase() === "monday"){
  dayMsg = `Happy ${day}`;
}else if(day.toLowerCase() === "tuesday"){
  dayMsg = `${day}, four days to go`;
}else if(day.toLowerCase() === "wednesday"){
  dayMsg = `${day}, half way there`;
}else if(day.toLowerCase() === "thursday"){
  dayMsg = `${day}, start planning the weekend`;
}else if(day.toLowerCase() === "friday"){
  dayMsg = "woo - hoo, the weekend is here";
} else {
  dayMsg = "Stay calm and keep having fun!";
}

function DayApp(){
  return(
    <div className='App'>
      <h1>
        {dayMsg}
      </h1>

      {{morning} ? <h2>Have you had breakfast yet?</h2> : ""}
    </div>
  );
}

export default DayApp;