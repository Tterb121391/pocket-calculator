var output = "";
var calc = "";
var operations = [];
var answer = "";
var num = "";

function clearing() {
  let p = document.getElementById("output");
  p.innerHTML = "0";
  answer = "";
  output = "";
  operations = [];
  num = "";
}

function negate() {
  let p = document.getElementById("output");
  if(Number.isNaN(Number(num)) == false) {
    num = Number(num) * -1;
    let lastChar = output[output.length - 1];
    num = String(num);
    for(let b = output.length; b > 0; b--) {
      if(lastChar === ("+" || "-" || "x" || "/")) {
        break;
      } else {
        output = output.slice(0, b - 2);
        lastChar = output[b - 1];
      }
    }
    output = output + num;
    p.innerHTML = output;
  }
}

function percentage() {
  let p = document.getElementById("output");
  if(Number.isNaN(Number(num)) == false) {
    num = Number(num) * 0.01;
    let lastChar = output[output.length - 1];
    num = String(num);
    for(let b = output.length; b > 0; b--) {
      if(lastChar === ("+" || "-" || "x" || "/")) {
        break;
      } else {
        output = output.slice(0, b - 2);
        lastChar = output[b - 1];
      }
    }
    output = output + num;
    p.innerHTML = output;
  }
}

function buttonNum0() {
  let p = document.getElementById("output");
  output = output + "0";
  p.innerHTML = output;
  num = num + "0";
}

function buttonNum1() {
  let p = document.getElementById("output");
  output = output + "1";
  p.innerHTML = output;
  num = num + "1";
}

function buttonNum2() {
  let p = document.getElementById("output");
  output = output + "2";
  p.innerHTML = output;
  num = num + "2";
}

function buttonNum3() {
  let p = document.getElementById("output");
  output = output + "3";
  p.innerHTML = output;
  num = num + "3";
}

function buttonNum4() {
  let p = document.getElementById("output");
  output = output + "4";
  p.innerHTML = output;
  num = num + "4";
}

function buttonNum5() {
  let p = document.getElementById("output");
  output = output + "5";
  p.innerHTML = output;
  num = num + "5";
}

function buttonNum6() {
  let p = document.getElementById("output");
  output = output + "6";
  p.innerHTML = output;
  num = num + "6";
}

function buttonNum7() {
  let p = document.getElementById("output");
  output = output + "7";
  p.innerHTML = output;
  num = num + "7";
}

function buttonNum8() {
  let p = document.getElementById("output");
  output = output + "8";
  p.innerHTML = output;
  num = num + "8";
}

function buttonNum9() {
  let p = document.getElementById("output");
  output = output + "9";
  p.innerHTML = output;
  num = num + "9";
}

function decimal() {
  let p = document.getElementById("output");
  output = output + ".";
  p.innerHTML = output;
  num = num + ".";
}

function add() {
  let p = document.getElementById("output");
  output = output + "+";
  p.innerHTML = output;
  operations.push(Number(num));
  operations.push("+");
  num = "";
}

function subtract() {
  let p = document.getElementById("output");
  output = output + "-";
  p.innerHTML = output;
  operations.push(Number(num));
  operations.push("-");
  num = "";
}

function multiply() {
  let p = document.getElementById("output");
  output = output + "x";
  p.innerHTML = output;
  operations.push(Number(num));
  operations.push("x");
  num = "";
}

function divide() {
  let p = document.getElementById("output");
  output = output + "/";
  p.innerHTML = output;
  operations.push(Number(num));
  operations.push("/");
  num = "";
}

function equals() {
  operations.push(Number(num));
  let p = document.getElementById("output");
  for(let z = 0; z <= operations.length; z++) {
    if(operations[z] === "x") {
      operations.splice(z - 1, 0, Number(operations[z - 1]) * Number(operations[z + 1]));
      operations.splice(z, 3);
    } else if(operations[z] === "/") {
      operations.splice(z - 1, 0, Number(operations[z - 1]) / Number(operations[z + 1]));
      operations.splice(z, 3);
    }
  }
  for(let a = 0; a <= operations.length; a++) {
    if(operations[a] === "+") {
      operations.splice(a - 1, 0, Number(operations[a - 1]) + Number(operations[a + 1]));
      operations.splice(a, 3);
    } else if(operations[a] === "-") {
      operations.splice(a - 1, 0, Number(operations[a - 1]) - Number(operations[a + 1]));
      operations.splice(a, 3);
    }
  }
  calc = operations[0];
  if(Number.isNaN(calc) == true || calc === Infinity) {
    p.innerHTML = "Error";
  } else {
    p.innerHTML = calc;
    answer = calc;
    output = answer;
  }
  operations = [];
  num = "";
}

function showList() {
  console.log(operations);
}
