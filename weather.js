const API_KEY = 'AIzaSyCXLmpiXZYjTNQERWBh9Mh0d3pkYr0ZFwo'; // Replace with your API key
const API_ENDPOINT = 'https://console.cloud.google.com/apis/library/maps-backend.googleapis.com?project=weather-372621'; // API endpoint for getting weather data

async function getWeather() {
  const location = document.getElementById('location').value; // Get the location from the form
  const url
