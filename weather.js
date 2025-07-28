// OpenWeatherMap API key 
const API_KEY = "8c16812bf094d5f0852d9ee6044d3b3f";
// Async function to fetch weather data for a given city
async function getWeather() {
      // Get city name from input field
    const city = document.getElementById('cityInput').value;

    // Exit if no city is provided
    if (!city) return;

    try {
          // Fetch weather data from OpenWeatherMap API
        // Parameters:
        // - q: city name
        // - appid: API key
        // - units: metric for Celsius
        // - lang: zh_ca for Chinese descriptions
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=zh_ca`)

            // Parse JSON response
        const data = await response.json();
        // Check if response is successful (status code 200)
        if (data.cod === 200) {
            displayWeather(data);
             // Show error message from API response
        } else {
            document.getElementById('weatherResult').innerHTML = 
                `error: ${data.message}`;
        }
    } catch (error) {
        // Log any errors that occur during the API request
        console.error("API request failed:", error);
    }
}
// Function to display weather data in the HTML
function displayWeather(data) {
    const resultDiv = document.getElementById('weatherResult');
    
      // Create HTML content with weather information:
    // - City name
    // - Temperature in Celsius
    // - Weather description (in Chinese)
    // - Humidity percentage
    resultDiv.innerHTML = `
        <h2>${data.name} weather</h2>
        <p>temperature: ${data.main.temp}°C</p>
        <p>weather: ${data.weather[0].description}</p>
        <p>humidity: ${data.main.humidity}%</p>
    `;
}