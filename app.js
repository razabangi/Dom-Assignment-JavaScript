function changeBg(data) {
    let changeBg = document.getElementById("change-bg-box");
    changeBg.style.background = data.value;
}

function changeText(data){
    let changeBg = document.getElementById("change-bg-box");
    changeBg.style.color = data.value;
}

function getId(data) {
    return document.getElementById(data);
}

let imageManupulate = "image-manupulate";

function showImage() {
    let input = getId(imageManupulate);
    input.style.display = "block";
}

function bigImage() {
    let input = getId(imageManupulate);
    input.style.width = "450px";
}

function smallImage() {
    let input = getId(imageManupulate);
    input.style.width = "150px";
}

function hideImage() {
    let input = getId(imageManupulate);
    input.style.display = "none";
}

function bulbOn(data) {
    data.src = "./assets/images/bulbon.gif";
}

function bulbOff(data) {
    data.src = "./assets/images/pic_bulboff.gif";
}

function changePara(data){
    data.parentElement.style.color = data.value;
}