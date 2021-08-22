const btnN = document.querySelectorAll(".btnN");
const btnO = document.querySelectorAll(".btnO");
const btnIgual = document.querySelector(".btnIgual");
const btnClear = document.querySelector(".btnClear")
const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display2");
const btnDelete = document.querySelector(".btnDelete");
const btnPunto = document.querySelector(".btnPunto");


let numeroA = "";
let numeroB = "";
let operador= "";
let res = ""

btnN.forEach((button) =>
  button.addEventListener('click', () => mostrarNum(button.textContent))
)

btnO.forEach((button) =>
button.addEventListener ('click', () => mostrarOperator(button.textContent))

)

btnClear.addEventListener ('click', clear);
btnIgual.addEventListener ('click', resultado);
btnDelete.addEventListener( 'click' , borrar);
btnPunto.addEventListener('click' , addPunto);

function addPunto(){
    if (display1.textContent.includes(".")) {
        return
    }else if (display1.textContent != "") {
        display1.textContent += btnPunto.textContent;
    }
}

function borrar(){
    let temp;
    temp = display1.textContent;
    temp = temp.substring(0 , temp.length -1);
    display1.textContent = temp;
}

function clear(){
    display1.textContent="";
    display2.textContent="";
    numeroA = "";
    numeroB = "";
    operador= "";
    res = ""
}


function mostrarNum(num){

    display1.textContent += num;
    
}

function mostrarOperator(ope){
    numeroA = display1.textContent;
    if (numeroA == "") {
        return
    }else{
        operador = ope;
        
        display2.textContent = numeroA + ope
        display1.textContent = "";
        
    }

}

function resultado (){
    if (operador == "") {
        return
    }
    display2.textContent += display1.textContent;
    numeroB = display1.textContent;
    display1.textContent=operar(numeroA , operador , numeroB);
    res=numeroA;

    
}

function suma(a,b) {
    x = Number(a);
    y = Number(b);
    return x+y
}

function resta(a,b) {
    return a-b
}

function multi(a,b) {
    return a*b
}

function divi(a,b){
    if (b==0) {
        return "ERROR"
    }
    return a/b
}


function operar( a , op ,  b) {
    switch (op) {
        case '+':
            return suma(a,b);
            break;
        case '-':
            return resta(a,b);
            break;
        case '*':
            return multi(a,b);
            break;
        case '/':
            return divi(a,b);
            break;
        default:
            break;
    }
}