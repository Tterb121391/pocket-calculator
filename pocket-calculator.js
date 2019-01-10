var output = "";
var calc = "";
var operations = [];
var answer = "";
var item = "";
var recall = false;

function clearing() {
  let p = document.getElementById("output");
  p.innerHTML = "0";
  answer = "";
  output = "";
  operations = [];
  item = "";
  recall = false;
}

function negate() {
  let p = document.getElementById("output");
  if(Number.isNaN(Number(item)) == false) {
    item = Number(item) * -1;
    let lastChar = output[output.length - 1];
    item = String(item);
    for(let c = output.length; c > 0; c--) {
      if(lastChar === ("+" || "-" || "x" || "/")) {
        break;
      } else {
        output = output.slice(0, c - 2);
        lastChar = output[c - 1];
      }
    }
    output = output + item;
    p.innerHTML = output;
  }
}

function percentage() {
  let p = document.getElementById("output");
  if(Number.isNaN(Number(item)) == false) {
    item = Number(item) * 0.01;
    let lastChar = output[output.length - 1];
    item = String(item);
    for(let b = output.length; b > 0; b--) {
      if(lastChar === ("+" || "-" || "x" || "/")) {
        break;
      } else {
        output = output.slice(0, b - 2);
        lastChar = output[b - 1];
      }
    }
    output = output + item;
    p.innerHTML = output;
  }
}

function commaDelimit() {
  let r;
  for(r = 0; r < output.length; r++) {
    if(output[r] === ",") {
      output = output.substring(0, r) + output.substring(r + 1);
      r--;
    } else if(output[r] === ".") {
        break;
    }
  }
  if(r > 3) {
    for(let s = r - 3; s > 0; s -= 3) {
      output = output.substring(0, s) + "," + output.substring(s);
    }
  }
}

function digit(num) {
  if(item.length <= 8) {
    let p = document.getElementById("output");
    output = output + String(num);
    item = item + String(num);
    commaDelimit();
    p.innerHTML = output;
  }
  recall = false;
}

function decimal() {
  if(item.length <= 8) {
    let p = document.getElementById("output");
    if(item === "" && output === "") {
      output = output + "0";
      item = item + "0";
    }
    output = output + ".";
    p.innerHTML = output;
    item = item + ".";
  }
  recall = false;
}

function add() {
  if(operations[operations.length - 1] === "x" || operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "/") {
    operations.splice(operations.length - 1, 1);
  } else if(recall == true) {
    operations.push(answer);
  } else {
    operations.push(item);
  }
  operations.push("+");
  item = "";
  output = "";
  recall = false;
}

function subtract() {
  if(operations[operations.length - 1] === "x" || operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "/") {
    operations.splice(operations.length - 1, 1);
  } else if(recall == true) {
    operations.push(answer);
  } else {
    operations.push(item);
  }
  operations.push("-");
  item = "";
  output = "";
  recall = false;
}

function multiply() {
  if(operations[operations.length - 1] === "x" || operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "/") {
    operations.splice(operations.length - 1, 1);
  } else if(recall == true) {
    operations.push(answer);
  } else {
    operations.push(item);
  }
  operations.push("x");
  item = "";
  output = "";
  recall = false;
}

function divide() {
  if(operations[operations.length - 1] === "x" || operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "/") {
    operations.splice(operations.length - 1, 1);
  } else if(recall == true) {
    operations.push(answer);
  } else {
    operations.push(item);
  }
  operations.push("/");
  item = "";
  output = "";
  recall = false;
}

function equals() {
  operations.push(item);
  let p = document.getElementById("output");
  if(operations[operations.length - 1] === "") {
    p.innerHTML = "Error";
  } else {
    for(let z = 0; z <= operations.length; z++) {
      if(operations[z] === "x") {
        operations.splice(z - 1, 0, Number(operations[z - 1]) * Number(operations[z + 1]));
        operations.splice(z, 3);
        z--;
      } else if(operations[z] === "/") {
        operations.splice(z - 1, 0, Number(operations[z - 1]) / Number(operations[z + 1]));
        operations.splice(z, 3);
        z--;
      }
    }
    for(let a = 0; a <= operations.length; a++) {
      if(operations[a] === "+") {
        operations.splice(a - 1, 0, Number(operations[a - 1]) + Number(operations[a + 1]));
        operations.splice(a, 3);
        a--;
      } else if(operations[a] === "-") {
        operations.splice(a - 1, 0, Number(operations[a - 1]) - Number(operations[a + 1]));
        operations.splice(a, 3);
        a--;
      }
    }
    calc = operations[0];
    if(Number.isNaN(calc) == true || calc === Infinity) {
      p.innerHTML = "Error";
    } else {
      answer = calc;
      output = String(answer);
      if(answer < 1000000000) {
        commaDelimit();
      } else {
        let coefficient = 0;
        let degree;
        for(let n = 9; coefficient < 1 || coefficient >= 10; n++) {
          coefficient = answer / 10**n;
          degree = n;
        }
        output = String(coefficient.toFixed(5)) + "e" + String(degree);
      }
      p.innerHTML = output;
    }
  }
  operations = [];
  item = "";
  output = "";
  recall = true;
}

function showList() {
  console.log(operations);
  console.log(output);
}
