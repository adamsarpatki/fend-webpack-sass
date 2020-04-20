const baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
const appID = 'd29325eeedff19bec6e46a01c7124d3f';

const getData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
    });

    try {
        const newData = response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

async function checkWeather() {
    let zipCode = document.getElementById('weather').value;
    const weatherData = await getData(`${baseURL}zip=${zipCode},us&appid=${appID}`);
    const temperature = weatherData.main.temp;
    const location = weatherData.name;
    document.getElementById('results').innerHTML = `The temperature in ${location} (${zipCode}) is ${temperature} F.`
}

export { checkWeather }