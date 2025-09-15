const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector(".grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editId = "";

form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault()
    const value = grocery.value
    if(value){
        console.log("Value Is Thappu");
    }
    const id = new Date().getTime().toString()
    if(value !== '' && editFlag===false){
        console.log("Add item to the list");
    }else if (value !=='' && editFlag === true){
        "Editing"
    } else{
        "Empty"
    }
}