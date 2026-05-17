
let darkBtn = document.getElementById("darkModeBtn");

let input = document.getElementById("habitInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("habitList");
let counter = document.getElementById("counter");
let clearBtn = document.getElementById("clearBtn");

let habits = [];

function showHabits(){

    list.innerHTML = "";

    habits.forEach(function(habit,index){

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = habit;

        span.onclick = function(){
            span.classList.toggle("completed");
        };

        li.appendChild(span);

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function(){

            habits.splice(index,1);

            saveHabits();

            showHabits();

        };

        li.appendChild(deleteBtn);

        list.appendChild(li);

    });

    counter.textContent = "Total Habits: " + habits.length;

}

function saveHabits(){

    localStorage.setItem("myHabits", JSON.stringify(habits));

}

button.addEventListener("click", function(){

    let habit = input.value;

    if(habit === "") return;

    habits.push(habit);

    saveHabits();

    showHabits();

    input.value = "";

});

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        button.click();

    }

});

let savedHabits = localStorage.getItem("myHabits");

if(savedHabits){

    habits = JSON.parse(savedHabits);

    showHabits();

}

clearBtn.onclick = function(){

    habits = [];

    saveHabits();

    showHabits();

};

darkBtn.onclick = function(){

    document.body.classList.toggle("dark");

};