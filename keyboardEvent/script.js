const body = document.querySelector(`body`);
const initMessage = document.querySelector(`.initMessage`);
const main = document.querySelector(`.main`);
const numberB = document.querySelector(`.numberBoard`);
const enterKey = document.querySelector(`#enterKey`).querySelector(`.box-content`);
const eventLocation = document.querySelector(`#eventLocation`).querySelector(`.box-content`);
const eventWhich = document.querySelector(`#eventWhich`).querySelector(`.box-content`);
const eventCode = document.querySelector(`#eventCode`).querySelector(`.box-content`);

console.log(initMessage);

function changeView() {
    initMessage.classList.add("hide");
    main.classList.remove("hide");
}

function handleKeyDown(e) {
    e.preventDefault();
    changeView();

    numberB.innerText = e.keyCode;
    eventLocation.innerText = e.location;
    enterKey.innerText = e.key;
    eventWhich.innerText = e.keyCode;
    eventCode.innerText = e.code;

    if(e.keyCode == 32) {
        enterKey.innerText = "Space"; 
    }

    console.log(e);
}

function init() {
    body.addEventListener("keydown", handleKeyDown);
}

init();