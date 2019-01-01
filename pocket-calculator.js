var output = "";
var calc = "";
var operations = [];
var answers = [];
document.getElementById("output").innerHTML = "0";

function buttonNum0() {
  let p = document.getElementById("output");
  output = output + "0";
  p.innerHTML = output;
  operations.push("0");
}

function buttonNum1() {
  let p = document.getElementById("output");
  output = output + "1";
  p.innerHTML = output;
  operations.push("1");
}

function buttonNum2() {
  let p = document.getElementById("output");
  output = output + "2";
  p.innerHTML = output;
  operations.push("2");
}

function buttonNum3() {
  let p = document.getElementById("output");
  output = output + "3";
  p.innerHTML = output;
  operations.push("3");
}

function buttonNum4() {
  let p = document.getElementById("output");
  output = output + "4";
  p.innerHTML = output;
  operations.push("4");
}

function buttonNum5() {
  let p = document.getElementById("output");
  output = output + "5";
  p.innerHTML = output;
  operations.push("5");
}

function buttonNum6() {
  let p = document.getElementById("output");
  output = output + "6";
  p.innerHTML = output;
  operations.push("6");
}

function buttonNum7() {
  let p = document.getElementById("output");
  output = output + "7";
  p.innerHTML = output;
  operations.push("7");
}

function buttonNum8() {
  let p = document.getElementById("output");
  output = output + "8";
  p.innerHTML = output;
  operations.push("8");
}

function buttonNum9() {
  let p = document.getElementById("output");
  output = output + "9";
  p.innerHTML = output;
  operations.push("9");
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
  for(let x = 0; x <= operations.length; x++) {
    if((Number.isNaN(Number(operations[x - 1])) == false || operations[x - 1] === ".") && (Number.isNaN(Number(operations[x])) == false || operations[x] === ".")) {
      operations.splice(x - 1, 0, Number(operations[x - 1] + operations[x]));
      operations.splice(x, 2);
    }
  }
  // let num;
  // for(let y = 0; y <= operations.length; y++) {
  //   if(operations[y] !== ("+" || "-" || "x" || "/")) {
  //     num = operations[y];
  //     num = Number(num);
  //     operations.splice(y, 1, num);
  //   }
  // }
  for(let z = 0; z <= operations.length; z++) {
    if(operations[z] === "x") {
      operations.splice(z - 1, 0, operations[z - 1] * operations[z + 1]);
      operations.splice(z, 3);
    } else if(operations[z] === "/") {
      operations.splice(z - 1, 0, operations[z - 1] / operations[z + 1]);
      operations.splice(z, 3);
    }
  }
  calc = operations[0];
  p.innerHTML = calc;
  answers.push(calc);
}
