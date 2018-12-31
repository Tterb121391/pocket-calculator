var output = "";
var calc = "";
var operations = [];

function buttonNum0() {
  let p = document.getElementById("output");
  output = output + "0";
  p.innerHTML = output;
}

function buttonNum1() {
  let p = document.getElementById("output");
  output = output + "1";
  p.innerHTML = output;
}

function buttonNum2() {
  let p = document.getElementById("output");
  output = output + "2";
  p.innerHTML = output;
}

function buttonNum3() {
  let p = document.getElementById("output");
  output = output + "3";
  p.innerHTML = output;
}

function buttonNum4() {
  let p = document.getElementById("output");
  output = output + "4";
  p.innerHTML = output;
}

function buttonNum5() {
  let p = document.getElementById("output");
  output = output + "5";
  p.innerHTML = output;
}

function buttonNum6() {
  let p = document.getElementById("output");
  output = output + "6";
  p.innerHTML = output;
}

function buttonNum7() {
  let p = document.getElementById("output");
  output = output + "7";
  p.innerHTML = output;
}

function buttonNum8() {
  let p = document.getElementById("output");
  output = output + "8";
  p.innerHTML = output;
}

function buttonNum9() {
  let p = document.getElementById("output");
  output = output + "9";
  p.innerHTML = output;
}

function add() {
  let p = document.getElementById("output");
  output = output + "+";
  p.innerHTML = output;
  operations.push("+");
}

function subtract() {
  let p = document.getElementById("output");
  output = output + "-";
  p.innerHTML = output;
  operations.push("-");
}

function multiply() {
  let p = document.getElementById("output");
  output = output + "x";
  p.innerHTML = output;
  operations.push("x");
}

function divide() {
  let p = document.getElementById("output");
  output = output + "/";
  p.innerHTML = output;
  operations.push("/");
}

function equals() {
  let p = document.getElementById("output");
  p.innerHTML = calc;
}
