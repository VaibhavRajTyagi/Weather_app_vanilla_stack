document
  .getElementById("citySearch")
  .addEventListener("click", async function () {
    const city = document.getElementById("city-value").value; // Get the input value
    console.log(city); // Display the city name in the console

    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6b8e7999e3msh32f3148f0b47174p1e275ajsn0e7a8ef160cd",
        "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      let temp = Math.floor(((result.main.temp - 32) * 5) / 9);
      let feel_like = Math.floor(((result.main.feels_like - 32) * 5) / 9);
      let wind = result.wind.speed;
      let weather = result.weather[0].main;
      let pressure = result.main.pressure;

      document.getElementById("city_name").innerHTML = `City name: ${city}`;
      document.getElementById("temp").innerHTML = `Temp: ${temp} °C`;
      document.getElementById(
        "feels_like"
      ).innerHTML = `Feels like: ${feel_like} °C`;
      document.getElementById(
        "wind_speed"
      ).innerHTML = `Wind speed: ${wind} m/s`;
      document.getElementById("weather").innerHTML = `Weather: ${weather}`;
      document.getElementById(
        "pressure"
      ).innerHTML = `Pressure: ${pressure} millibar`;
    } catch (error) {
      console.error(error);
    }
  });
