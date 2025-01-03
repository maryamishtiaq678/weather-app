function getweather(){
    const pickCity_Name = document.querySelector("#city1").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=cc709938c8f34514a57113722242208&q=${pickCity_Name}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
    var weathercard = (response.data.current);
    console.log(weathercard.temp_c);
    document.getElementById("res").innerHTML = (`Today temp of ${pickCity_Name} is ${weathercard.temp_c}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
};