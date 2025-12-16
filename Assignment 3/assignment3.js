  function convertTemperature() {
      const input = prompt("Enter temperature (number):");
      if (input === "") 
        console.log("Please enter a numerical value");

      const temperature = parseFloat(input);
      if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Not a temperature value.";
        return;
      }

      const scaleInput = prompt("Is this in Celsius or Fahrenheit? Enter C or F:");
      if (scaleInput === "") return;
      const scale = scaleInput.trim().toUpperCase();
      if (scale !== "C" && scale !== "F") {
        document.getElementById("result").innerText = "Invalid scale. Enter C or F.";
        return;
      }

      let converted, resultText;
      if (scale === "C") {
        converted = temperature * 9 / 5 + 32;
        resultText = `${temperature.toFixed(2)}°C = ${converted.toFixed(2)}°F`;
      } else {
        converted = (temperature - 32) * 5 / 9;
        resultText = `${temperature.toFixed(2)}°F = ${converted.toFixed(2)}°C`;
      }

      document.getElementById("result").innerText = resultText;
    }




