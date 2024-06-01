//// add using IIFE

// const data = ((a,b)=>a+b)(2,3);
// console.log(data)

// for fetching data
(async() => {
    const data = await fetch('http://api.weatherapi.com/v1/current.json?key=9f83d1da050a4531adb32718243105&q=pokhara&aqi=yes');
    console.log(await(data.json()))})()


// (async () => {
//     try {
//         const response = await fetch('http://api.weatherapi.com/v1/current.json?key=9f83d1da050a4531adb32718243105&q=pokhara&aqi=yes');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const weatherData = await response.json();
//         console.log(weatherData);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// })();


// (async () => {
//            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=9f83d1da050a4531adb32718243105&q=pokhara&aqi=yes');
//         const weatherData = await response.json();
//         console.log(weatherData);
// })();
