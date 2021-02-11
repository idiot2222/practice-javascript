const form = document.querySelector(`#toDoForm`);
const input = document.querySelector(`#toDoText`);
const list = document.querySelector(`#toDoList`);

const TODO = "toDoList";
let arr = JSON.parse(localStorage.getItem(TODO));
if(arr === null) {
    arr = [];
}

function findById(id) {
    const len = arr.length;
    let ans;

    for(let i = 0 ; i < len ; i++) {
        let now = arr[i];

        if(now.idx == id) {
            ans = i;
        }
    }

    return arr[ans];
}

function lockHandler(e) {
    e.preventDefault();

    const lockBtn = e.target;
    const li = lockBtn.parentNode;
    const delBtn = li.querySelector(`.deleteBtn`);    
    const obj = findById(li.id);

    if(delBtn.classList.contains("lock")) {
        delBtn.classList.remove("lock");
        obj.isLocked = false;
    }
    else {
        delBtn.classList.add("lock");
        obj.isLocked = true;
    }

    saveList();
}

function deleteById(id) {
    const len = arr.length;
    let ans = -1;

    for(let i = 0 ; i < len ; i++) {
        let temp = arr[i];

        if(temp.idx == id) {
            ans = i;
            break;
        }
    }

    arr.splice(ans, 1);
}

function deleteHandler(e) {
    e.preventDefault();

    const delBtn = e.target;
    const li = delBtn.parentNode;
    
    deleteById(li.id);
    list.removeChild(li);
    saveList();
}

function saveList() {
    localStorage.setItem(TODO, JSON.stringify(arr));
}

function print(obj) {
    const li = document.createElement("li");
    li.classList.add("id");
    li.innerText = obj.item;
    li.id = obj.idx;
    console.log(obj);

    const lockBtn = document.createElement("button");
    lockBtn.innerText = "lock";
    lockBtn.classList.add("lockBtn");
    lockBtn.addEventListener("click", lockHandler);

    const delBtn = document.createElement("button");
    delBtn.innerText = "del";
    delBtn.classList.add("deleteBtn");
    delBtn.addEventListener("click", deleteHandler);
    if(obj.isLocked) {
        delBtn.classList.add("lock");
    }
    
    li.appendChild(lockBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
}

function submitHandler(e) {
    e.preventDefault();
    if(input.value == "") {
        return;
    }

    const cnt = list.childElementCount;
    let text = input.value;
    const obj = {
        idx: cnt,
        item: text,
        isLocked: false
    }

    arr.push(obj);
    print(obj);
    input.value = "";

    saveList();
}

function loadByLS() {
    const loadedArr = JSON.parse(localStorage.getItem(TODO));
 
    loadedArr.forEach(function a(element) {
        print(element);
    });
}
    

function init() {
    loadByLS();
    form.addEventListener("submit", submitHandler);
}

init();