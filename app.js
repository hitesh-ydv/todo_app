let input = document.getElementById("input");
let checkContainer = document.getElementById("check-container");

function addTask(){
    if(input.value == ''){
        alert("Plsearse write something")
    }else{
        let li = document.createElement('li');
        let span = document.createElement('span');
        li.innerHTML = input.value;
        checkContainer.appendChild(li);
        span.innerHTML = "&#128473;";
        li.appendChild(span)
    }
    input.value = '';
    saveData()
}


document.getElementById("check-container").addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);


function saveData(){
    localStorage.setItem("data", checkContainer.innerHTML)
}

function showTask(){
    checkContainer.innerHTML = localStorage.getItem("data")
}
showTask();