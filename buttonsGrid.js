const res = document.getElementById('res') ;
const btns = document.getElementById('btns') ;
const btn0 = document.getElementById('btn0') ;
const btn1 = document.getElementById('btn1') ;
const btnClr = document.getElementById('btnClr') ;
const btnEql = document.getElementById('btnEql') ;
const btnSum = document.getElementById('btnSum') ;
const btnSub = document.getElementById('btnSub') ;
const btnMul = document.getElementById('btnMul') ;
const btnDiv = document.getElementById('btnDiv') ;

res.innerHTML = '' ;

btn1.addEventListener('click',() => {
    res.innerHTML += '1' ;
})  ;
btn0.addEventListener('click',() => {
    res.innerHTML += '0' ;
})  ;
btnSum.addEventListener('click',() => {
    res.innerHTML += '+' ;
})  ;
btnSub.addEventListener('click',() => {
    res.innerHTML += '-' ;
})  ;
btnMul.addEventListener('click',() => {
    res.innerHTML += '*' ;
})  ;
btnDiv.addEventListener('click',() => {
    res.innerHTML += '/' ;
})  ;
btnClr.addEventListener('click',() => {
    res.innerHTML = '' ;
}) ;
btnEql.addEventListener('click',() => {
const re = /[01]+/g ;
const re1 = /[\+\-\*\/]/
    let arr = res.innerHTML.match(re) ;
    let num1 = arr[0] ;
    let num2 = arr[1] ;
    let arr1 = res.innerHTML.match(re1) ;
    num1 = parseInt(num1 , 2) ;
    num2 = parseInt(num2 , 2) ;
    console.log(arr) ;
    console.log(arr1) ;
    let result = eval(`${num1}${arr1}${num2}`) ;
    console.log(result) ; 
    result = result.toString(2) ;
    console.log(result) ;
    res.innerHTML =  result
})