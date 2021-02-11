const dec = document.querySelector(`#decrease`);
const res = document.querySelector(`#reset`);
const inc = document.querySelector(`#increase`);
const count = document.querySelector(`h2`);
const cL = count.classList;
let now = parseInt(count.innerText);

function decHandler() {
    count.innerText = `${--now}`;

    if(now === 0) {
        cL.remove("plus");
        cL.add("zero");
    }
    if(now === -1) {
        cL.remove("zero");
        cL.add("minus");
    }
}

function resHandler() {
    count.innerText = "0";
    now = 0;
    
    cL.remove("minus");
    cL.remove("plus");
    cL.add("zero");
}

function incHandler() {
    count.innerText = `${++now}`;

    if(now === 0) {
        cL.remove("minus");
        cL.add("zero");
    } 
    if(now === 1) {
        cL.remove("zero");
        cL.add("plus");
    }
}

function init() {
    dec.addEventListener("click", decHandler);
    res.addEventListener("click", resHandler);
    inc.addEventListener("click", incHandler);
}

init();