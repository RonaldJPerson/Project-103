let temperature = prompt("Enter a temperature in Celsius:");
temperature = Number(temperature);
let fahrenheit = (temperature * 9/5) + 32;
console.log(`${temperature}°C is equal to ${fahrenheit}°F`);
document.getElementById("results").textContent = `${temperature}°C is equal to ${fahrenheit}°F`;
