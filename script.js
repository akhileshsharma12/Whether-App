
const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const whether_img = document.querySelector(".whether-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const whether_body = document.querySelector(".whether-body");


async function checkWhether(city) {
    const api_key = "bbf415e33935d340fb15c4e2bb3996d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const whether_data = await fetch(`${url}`).then(response =>
        response.json());

        // if(whether_data.cod === `404`) {
        //     location_not_found.style.display = "flex";
        //     whether_body.style.display = "none";
        //     console.log("error");
        //     return;
        // }
    
    //location_not_found.style.display = "none";
    //whether_body.style.display = "flex";        
    temperature.innerHTML = `${Math.round(whether_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${whether_data.weather[0].description}`;
    humidity.innerHTML = `${whether_data.main.humidity}%`;
    wind_speed.innerHTML = `${whether_data.wind.speed}Km/H`;

    // switch(whether_data.weather.main) {
     
    //     case 'Clouds':
    //         whether_img.src = "/Assets/download (1).jpeg";
    //         break;
    //     case 'clear':
    //         whether_img.src = "Assets/download (1).jpeg";
    //         break;
    //     case 'Rain':
    //         whether_img.src = "Assets/images.jpeg";
    //         break;
    //     case 'Mist':
    //         whether_img.src = "/Assets/download.jpeg";
    //         break;
    //     case 'Snow':
    //         whether_img.src = "Assets/images (1).jpeg";
    //         break;
    // }

    switch (whether_data.weather[0].main) {
        case 'Clouds':
            whether_img.src = "Assets/cloudy.jpeg";
            break;
        case 'Clear':
            whether_img.src = "Assets/sun.jpeg";
            break;
        case "Rain":
            whether_img.src = "Assets/rainy.jpeg";
            break;
        case 'Mist':
            whether_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0qUX4i8hC5dYpc5FIWgZhtFpMBdEolqXw&s";
            break;
        case 'Snow':
            whether_img.src = "Assets/snow.jpeg";
            break;
        case 'Drizzle':
            whether_img.src = "Assets/download.jpg";
            break;
        
    }
    

    console.log(whether_data)
}

searchBtn.addEventListener('click', () => {
    checkWhether(inputBox.value);
});