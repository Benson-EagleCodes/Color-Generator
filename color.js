const redRange = document.querySelector('.red');
const greenRange = document.querySelector('.green');
const blueRange = document.querySelector('.blue');
const box = document.querySelector('.box');
const copyBtn = document.querySelector('.copyBtn');

let redDisplay = document.querySelector('.redDisplay');
let greenDisplay = document.querySelector('.greenDisplay');
let blueDisplay = document.querySelector('.blueDisplay');
let colorDis = document.querySelector('.color');

//functions 
function redDisplayColor() {
 let red = redRange.value;
 redDisplay.textContent = red;
}

function greenDisplayColor() {
 let green = greenRange.value;
 greenDisplay.textContent = green;
}

function blueDisplayColor() {
 let blue = blueRange.value;
 blueDisplay.textContent = blue;
}

function hexColor() {
 let redValue = redRange.value;
 let greenValue = greenRange.value;
 let blueValue = blueRange.value;
 
 let hexaColor = '#'
 
 let hexa = `${Color(redValue) + Color(greenValue) + Color(blueValue)}`;
 hexaColor += hexa;
 
 colorDis.textContent = hexaColor;
 colorDis.value = hexColor; 
 box.style.backgroundColor = `${hexaColor}`;
}

function Color(val) {
 let hex = parseInt(val).toString(16);
 hex.length === 1 ? '0' + hex : hex;
 return hex;
}

function copyColor(){
 let text = document.getElementById('text').textContent;
 console.log(text);
 navigator.clipboard.writeText(text);
 alert(`${text} successfully copied!`);
}

//eventlisteners
redRange.addEventListener('input',redDisplayColor);
redRange.addEventListener('input',hexColor);

greenRange.addEventListener('input',greenDisplayColor);
greenRange.addEventListener('input',hexColor);

blueRange.addEventListener('input',blueDisplayColor);
blueRange.addEventListener('input',hexColor);

copyBtn.addEventListener('click', copyColor);