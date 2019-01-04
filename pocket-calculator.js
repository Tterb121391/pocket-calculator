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
}

function negation() {
  let negation = false;
  let p = document.getElementById("output");
  // for(let w = 0; w <= operations.length; w++) {
  //   if((Number.isNaN(Number(operations[w - 1])) == false || operations[w - 1] === ".") && (Number.isNaN(Number(operations[w])) == false || operations[w] === ".")) {
  //     if(operations[w] === "." || operations[w - 1] === ".") {
  //       operations.splice(w - 1, 0, operations[w - 1] + operations[w]);
  //     } else {
  //       operations.splice(w - 1, 0, Number(operations[w - 1] + operations[w]));
  //     }
  //     operations.splice(w, 2);
  //     w--;
  //   }
  // }
  if(Number.isNaN(Number(operations[operations.length - 1])) == false) {
    operations.splice(operations.length - 1, 0, operations[operations.length - 1] * -1);
    operations.splice(operations.length - 1, 1);
    output = operations.join("");
    p.innerHTML = output;
  }
}

function percentage() {
  let p = document.getElementById("output");
  // for(let v = 0; v <= operations.length; v++) {
  //   if((Number.isNaN(Number(operations[v - 1])) == false || operations[v - 1] === ".") && (Number.isNaN(Number(operations[v])) == false || operations[v] === ".")) {
  //     if(operations[v] === "." || operations[v - 1] === ".") {
  //       operations.splice(v - 1, 0, operations[v - 1] + operations[w]);
  //     } else {
  //       operations.splice(v - 1, 0, Number(operations[v - 1] + operations[v]));
  //     }
  //     operations.splice(v, 2);
  //     v--;
  //   }
  // }
  let activate;
  if(Number.isNaN(Number(num)) == false) {
    num = Number(num) * 0.01
    operations.push(num);
    if(activate == -1) {
      operations.splice(operations.length - 2, 1);
      output = operations.join("");
    } else {
      output = operations.join("");
      activate = -1;
    }
    p.innerHTML = output;
  }
}

function buttonNum0() {
  let p = document.getElementById("output");
  output = output + "0";
  p.innerHTML = output;
  num = num + "0";
  // operations.push("0");
}

function buttonNum1() {
  let p = document.getElementById("output");
  output = output + "1";
  p.innerHTML = output;
  num = num + "1";
  // operations.push("1");
}

function buttonNum2() {
  let p = document.getElementById("output");
  output = output + "2";
  p.innerHTML = output;
  num = num + "2";
  // operations.push("2");
}

function buttonNum3() {
  let p = document.getElementById("output");
  output = output + "3";
  p.innerHTML = output;
  num = num + "3";
  // operations.push("3");
}

function buttonNum4() {
  let p = document.getElementById("output");
  output = output + "4";
  p.innerHTML = output;
  num = num + "4";
  // operations.push("4");
}

function buttonNum5() {
  let p = document.getElementById("output");
  output = output + "5";
  p.innerHTML = output;
  num = num + "5";
  // operations.push("5");
}

function buttonNum6() {
  let p = document.getElementById("output");
  output = output + "6";
  p.innerHTML = output;
  num = num + "6";
  // operations.push("6");
}

function buttonNum7() {
  let p = document.getElementById("output");
  output = output + "7";
  p.innerHTML = output;
  num = num + "7";
  // operations.push("7");
}

function buttonNum8() {
  let p = document.getElementById("output");
  output = output + "8";
  p.innerHTML = output;
  num = num + "8";
  // operations.push("8");
}

function buttonNum9() {
  let p = document.getElementById("output");
  output = output + "9";
  p.innerHTML = output;
  num = num + "9";
  // operations.push("9");
}

function decimal() {
  let p = document.getElementById("output");
  output = output + ".";
  p.innerHTML = output;
  num = num + ".";
  // operations.push(".");
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
  // for(let x = 0; x <= operations.length; x++) {
  //   if((Number.isNaN(Number(operations[x - 1])) == false || operations[x - 1] === ".") && (Number.isNaN(Number(operations[x])) == false || operations[x] === ".")) {
  //     if(operations[x] === "." || operations[x - 1] === ".") {
  //       operations.splice(x - 1, 0, operations[x - 1] + operations[x]);
  //     } else {
  //       operations.splice(x - 1, 0, Number(operations[x - 1] + operations[x]));
  //     }
  //     operations.splice(x, 2);
  //     x--;
  //   }
  // }
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
  if(Number.isNaN(calc) == true) {
    p.innerHTML = "Error";
  } else {
    p.innerHTML = calc;
    answer = calc;
    output = answer;
  }
  // operations = [];
}

function showList() {
  console.log(operations);
}
