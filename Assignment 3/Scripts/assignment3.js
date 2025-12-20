function convertCtoF(c) {
  return c * 9 / 5 + 32;
}

function convertFtoC(f) {
  return (f - 32) * 5 / 9;
}

function showResult(text) {
  const el = document.getElementById('result');
  el.innerText = text;
}

function updateThermometer(celsius) {
  const fill = document.getElementById('thermometerFill');
  const label = document.getElementById('thermometerLabel');
  if (!fill || !label) return;

 
  const clamped = Math.max(0, Math.min(100, celsius));
  const percent = (clamped / 100) * 100;
  fill.style.height = percent + '%';

  if (celsius <= 10) 
    fill.style.background = 'blue';
    else if (celsius <= 25) fill.style.background = 'orange';
  else fill.style.background = 'red';

  label.innerText = `${celsius.toFixed(1)} °C`;
}

function cToFPrompt() {
  const input = prompt('Enter temperature in Celsius (numeric value):');
  if (input === null) return; 
  const temp = parseFloat(input);
  if (isNaN(temp)) {
    showResult('Not a temperature value.');
    return;
  }
  const out = convertCtoF(temp);
  showResult(`${temp}°C = ${out.toFixed(2)}°F`);
  updateThermometer(temp);
}

function fToCPrompt() {
  const input = prompt('Enter temperature in Fahrenheit (numeric):');
  if (input === null) return; 
  const temp = parseFloat(input);
  if (isNaN(temp)) {
    showResult('Not a temperature value.');
    return;
  }
  const out = convertFtoC(temp);
  showResult(`${temp}°F = ${out.toFixed(2)}°C`);
  updateThermometer(out);
}

function generateTable() {
  const container = document.getElementById('tableContainer');
  if (!container) return;
  let html = '<table><thead><tr><th>Celsius (°C)</th><th>Fahrenheit (°F)</th></tr></thead><tbody>';
  for (let c = 0; c <= 100; c += 10) {
    const f = convertCtoF(c);
    html += `<tr><td>${c}</td><td>${f.toFixed(2)}</td></tr>`;
  }
  html += '</tbody></table>';
  container.innerHTML = html;
}

function init() {
  const cToFBtn = document.getElementById('cToFBtn');
  const fToCBtn = document.getElementById('fToCBtn');
  const genBtn = document.getElementById('generateTableBtn');

  if (cToFBtn) cToFBtn.addEventListener('click', cToFPrompt);
  if (fToCBtn) fToCBtn.addEventListener('click', fToCPrompt);
  if (genBtn) genBtn.addEventListener('click', generateTable);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

