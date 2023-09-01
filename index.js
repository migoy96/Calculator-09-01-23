function one(number){
    let num = document.getElementById("num");
    num.value += number;
}

function plus(operator){
    let num = document.getElementById("num");
    num.value += operator;
}

function equal(){
    let num = document.getElementById("num");
    num.value = eval(num.value);
}

function bura(){
    let num = document.getElementById("num");
    num.value = "";
}