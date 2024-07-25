const btn = document.getElementById("getLocation");
const locationTxt = document.getElementById("location");

async function getWeather(lat, long){
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=8bdada4cd9bb46c1a2360803242407&q=${lat}, ${long}&aqi=yes`);

  return await res.json();
  // console.log(res.location.name);
  // locationTxt.innerText = res.location.name;
}

async function onSuccess(position){
  // console.log(position);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const result = await getWeather(lat, long)

console.log(result.location);
  locationTxt.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
}

function onFail(error){
  console.log(error.message);
}

btn.addEventListener("click",()=>{
  navigator.geolocation.getCurrentPosition(onSuccess, onFail);
})