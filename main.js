function Start() {
    document.querySelector("#landingpage").style.display = "none";
    document.querySelector("#tutorial").style.display = "flex";
}

function tutorial() {
    document.querySelector("#tutorial").style.display = "none";
    document.querySelector("#question1").style.display = "flex";
}

function firstInduct() {
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#inductiveoutcome").style.display = "flex";
}

function firstDeduct() {
    document.querySelector("#question1").style.display = "none";
    document.querySelector("#first_deduct").style.display = "flex";
}    

function questionTwo() {
    document.querySelector("#inductiveoutcome").style.display = "none";
    document.querySelector("#first_deduct").style.display = "none";
    document.querySelector("#question2").style.display = "flex";
}

function secondInduct() {
    document.querySelector("#question2").style.display = "none";
    document.querySelector("#q2induct").style.display = "flex";
}

function secondDeduct() {
    document.querySelector("#question2").style.display = "none";
    document.querySelector("#mid_deduct").style.display = "flex";
}

function questionThree(){
    document.querySelector("#mid_deduct").style.display = "none";
    document.querySelector("#q2induct").style.display = "none";
    document.querySelector("#question3").style.display = "flex";
}
function thirdInduct() {
    document.querySelector("#question3").style.display = "none";
    document.querySelector("#End_induct").style.display = "flex";
}

function thirdDeduct() {
    document.querySelector("#question3").style.display = "none";
    document.querySelector("#end_deduct").style.display = "flex";
}

function comparison() {
    document.querySelector("#end_deduct").style.display = "none";
    document.querySelector("#End_induct").style.display = "none";
    document.querySelector("#final").style.display = "flex";
}