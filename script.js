alert('This is a Bingo game number generator.')

function random(){
  var res = Math.floor(Math.random() * 5) +1;
  var text;
  if (res === 1) {document.getElementById("number").innerHTML = Math.floor(Math.random()* 15) + 1; text = String.fromCharCode(66)}
  if (res === 2) {document.getElementById("number").innerHTML = Math.floor(Math.random()*(30 - 15) +1) +15; text = String.fromCharCode(73)}
  if (res === 3) {document.getElementById("number").innerHTML = Math.floor(Math.random()*(45 - 30) +1) +30; text = String.fromCharCode(78)}
  if (res === 4) {document.getElementById("number").innerHTML = Math.floor(Math.random()*(60 - 45) +1) +45; text = String.fromCharCode(71)}
  if (res === 5) {document.getElementById("number").innerHTML = Math.floor(Math.random()*(75 - 60) +1) +60; text = String.fromCharCode(79)}
  
  document.getElementById("char").innerHTML = text;
}

/*function randomChar() {
  var res = Math.floor(Math.random() * 5) +1;
  var text;
  if (res === 1) {text = String.fromCharCode(66)}
  document.getElementById("char").innerHTML = text;
  if (res === 2) {text = String.fromCharCode(73)}
  document.getElementById("char").innerHTML = text;
  if (res === 3) {text = String.fromCharCode(78)}
  document.getElementById("char").innerHTML = text;
  if (res === 4) {text = String.fromCharCode(71)}
  document.getElementById("char").innerHTML = text;
  if (res === 5) {text = String.fromCharCode(79)}
  document.getElementById("char").innerHTML = text;
}*/


