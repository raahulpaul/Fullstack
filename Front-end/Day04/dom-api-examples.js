const para = document.createElement("p");
para.textContent = "this is para from DOM API";

// setting attribute, first is attribute name, second is attribute value
para.setAttribute("id", "js_para");

// to get the attribute in console
console.log(para.getAttribute("id"))

// setting class
para.classList.add("one");
para.classList.add("two");

// removing class
para.classList.remove("two");

const span = document.createElement("span");
// another way to add attribute
span.id = "span_id";
span.className = "blue red";
span.style.backgroundColor = "yellow";
// span.textContent = "span by <em>DOM</em>"; // this will not get the tag and print it as it is
span.innerHTML = "span by <em>DOM</em>";

para.appendChild(span);

document.body.appendChild(para);

// unordered list

const hobbies = ["music", "reading", "coding"];

const list = document.createElement("ul");

for(let hobby of hobbies) {
    list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}

document.body.appendChild(list);


// get elements

console.log(document.getElementById("span_id").textContent);

console.log(document.getElementsByClassName("blue"));

console.log(document.querySelector("p")); // it'll just give the first p in the document

console.log(document.querySelectorAll("p")); // it'll give all p in the document

console.log(document.querySelector("#span_id")); // by id

console.log(document.querySelector(".one")); // by class