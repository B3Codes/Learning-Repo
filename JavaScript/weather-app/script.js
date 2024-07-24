
  const input = document.getElementById("city-name");
  const button = document.getElementById("search-btn");

  const cityName = document.getElementById("city-txt");
  const localTime = document.getElementById("localtime-txt");
  const temp = document.getElementById("temp-txt");

  async function getData(cityName){
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=8bdada4cd9bb46c1a2360803242407&q=${cityName}&aqi=yes`);

    return await res.json();
    
  }

  button.addEventListener("click",async ()=>{
    // console.log(input.value);
    const result = await getData(input.value);

    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    localTime.innerText = `${result.location.localtime}`;
    temp.innerText = `${result.current.temp_c}`;



  })

  // console.log(city_input_field.value);

