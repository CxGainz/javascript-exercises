// reference to container div in html body
const container = document.querySelector("#container");

// create content div and append to container div
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// add tags to be inserted into the content div
const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
content.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
content.appendChild(blueH3);

// create div with its own elements and append within content div 
const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.borderStyle = "solid";
pinkDiv.style.borderColor = "black";
content.appendChild(pinkDiv);

const inh1 = document.createElement("h1");
inh1.textContent = "I'm in a div";
pinkDiv.appendChild(inh1);

const newP = document.createElement("p");
newP.textContent = "ME TOO!";
pinkDiv.appendChild(newP);

