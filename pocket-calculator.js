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
    for(let c = output.length; c > 0; c--) {
      if(lastChar === ("+" || "-" || "x" || "/")) {
        break;
      } else {
        output = output.slice(0, c - 2);
        lastChar = output[c - 1];
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

function buttonNum0() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "0";
    num = num + "0";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum1() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "1";
    num = num + "1";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum2() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "2";
    num = num + "2";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum3() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "3";
    num = num + "3";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum4() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "4";
    num = num + "4";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum5() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "5";
    num = num + "5";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum6() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "6";
    num = num + "6";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum7() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "7";
    num = num + "7";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum8() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "8";
    num = num + "8";
    commaDelimit();
    p.innerHTML = output;
  }
}

function buttonNum9() {
  if(num.length <= 8) {
    let p = document.getElementById("output");
    output = output + "9";
    num = num + "9";
    commaDelimit();
    p.innerHTML = output;
  }
}

function decimal() {
  let p = document.getElementById("output");
  output = output + ".";
  p.innerHTML = output;
  num = num + ".";
}

function add() {
  if(operations[operations.length - 1] === ("+" || "-" || "x" || "/")) {
    operations.splice(operations.length - 1, 1);
  } else {
    operations.push(num);
  }
  operations.push("+");
  num = "";
  output = "";
}

function subtract() {
  if(operations[operations.length - 1] === ("+" || "-" || "x" || "/")) {
    operations.splice(operations.length - 1, 1);
  } else {
    operations.push(num);
  }
  operations.push("-");
  num = "";
  output = "";
}

function multiply() {
  if(operations[operations.length - 1] === ("+" || "-" || "x" || "/")) {
    operations.splice(operations.length - 1, 1);
  } else {
    operations.push(num);
  }
  operations.push("x");
  num = "";
  output = "";
}

function divide() {
  if(operations[operations.length - 1] === ("+" || "-" || "x" || "/")) {
    operations.splice(operations.length - 1, 1);
  } else {
    operations.push(num);
  }
  operations.push("/");
  num = "";
  output = "";
}

function equals() {
  let p = document.getElementById("output");
  if(operations[operations.length - 1] === ("+" || "-" || "x" || "/")) {
    p.innerHTML = "Error";
  } else {
    operations.push(num);
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
  num = "";
}

function showList() {
  console.log(operations);
  console.log(calc);
}
