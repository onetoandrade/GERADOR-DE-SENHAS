
let sliderElement = document.querySelector("#slider"); 
let buttomElement = document.queryselector ("#button");

let sizepassoword = document.queryselector("#valor");
let passoword = document.queryselector("#passoword");

let containerPassoword = document.queryselector("#container-passoword");

let charset = "abcdefghijlmnopqrstuvxz1234567890!@#";
let novasenha = "";

sizePassoword.innerHTML = sliderElement.value;

sliderElement.oniput = function(){
    sizePassoword.innerHTML = this.value;
}

function generatePassoword(){
    let pass = "";
    for(let i = 0,n =charset.length; i <sliderElement.value; ++i){
        passa += charset.charAt(Math.floor(match.random() * n));
    }

    console.log(pass);
}


