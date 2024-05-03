const button = document.querySelector("button");

const list = document.querySelector("ul");

const input = document.querySelector("input");

let inputVal;




button.addEventListener("click", () => {
    inputVal = input.value;

    input.value = '';

    li = document.createElement("li");
    span = document.createElement("span");
    btn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(btn);

    span.textContent = inputVal;
    btn.textContent = "Delete";

    list.appendChild(li);

    btn.addEventListener("click", function(e) {
        e.target.parentNode.remove();
    });
    
    input.focus();

});


// added second event that check when the user presses enter in the input field, 
input.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        //event.preventDefault();
        //this will trigger the button click event lister
        button.click();
    }
});

