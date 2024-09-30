

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerText = result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").innerText = result;
}


function addition() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerText = result;
}

function subtraction() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerText = result;
}

function min() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = Math.min(num1 , num2);
    document.getElementById("result").innerText = result;
}

function max() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = Math.max(num1 , num2);
    document.getElementById("result").innerText = result;
}



function power2() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result = num3**2 ;
    document.getElementById("result").innerText = result;
}



function sin() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.sin( num3) ;
    document.getElementById("result").innerText = result;
}

function cos() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.cos( num3) ;
    document.getElementById("result").innerText = result;
}

function tan() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.tan( num3) ;
    document.getElementById("result").innerText = result;
}


function abs() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.abs( num3) ;
    document.getElementById("result").innerText = result;
}

function sqrt() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.sqrt( num3) ;
    document.getElementById("result").innerText = result;
}


function round() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.round( num3) ;
    document.getElementById("result").innerText = result;
}

function ceil() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.ceil( num3) ;
    document.getElementById("result").innerText = result;
}


function floor() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let result =Math.floor( num3) ;
    document.getElementById("result").innerText = result;
}
