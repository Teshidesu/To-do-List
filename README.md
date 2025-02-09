# 🌟 Practice: DOM Manipulation with JavaScript 🚀 🪄⭐

Hey there, fellow coder! 👋 Ready to take control of the **DOM** like a pro? Here are some **essential tips** to manipulate the Document Object Model efficiently and make your websites more dynamic! ✨  

```js
// Let's manipulate the DOM like a pro! 🚀
document.querySelector("h1").textContent = "Welcome to the DOM!";
document.body.style.backgroundColor = "#f4f4f4";

`Here a practice was carried out creating a "To-do list" to learn how to use the DOM together with HTML5/CSS.`

The DOM is an interface that allows programs to interact with HTML documents.
Represents the document as a structure of objects.
Allows you to access, modify and update the content, style and structure of the document.

Examples of DOM usage:

Add dynamic content to a web page.
Change the style of a web page according to the user's preferences.
Validate the input of a form.
Create interactive web applications. //
```

## 📌 Selecting Elements the Smart Way 🎯

``` js
// Single element selection
const button = document.querySelector("#myButton");

// Multiple elements selection
const items = document.querySelectorAll(".list-item");

// Faster selection by ID
const title = document.getElementById("mainTitle");

```
## ✍️ Modifying Content Dynamically 📝

```js

// Change text content
document.getElementById("title").textContent = "Hello, DOM!";

// Insert HTML content dynamically
document.getElementById("content").innerHTML = "<strong>Updated!</strong>";

```

## 🎨 Styling Elements with JavaScript 🖌

```js
// Change styles directly
document.getElementById("box").style.backgroundColor = "blue";

// Add or remove CSS classes
element.classList.add("highlight");  
element.classList.remove("hidden");  
element.classList.toggle("dark-mode"); // Switches class on/off
```

## 🖱 Handling Events Like a Boss ⚡
```js
// Click event on a button
document.getElementById("myButton").addEventListener("click", () => {
    alert("Button clicked!");
});

// Removing an event listener
function handleClick() {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

## 🏗 Creating & Appending Elements 🏗

```js
// Create a new element and add it to the page
const newDiv = document.createElement("div");
newDiv.textContent = "I am new here!";
document.body.appendChild(newDiv);

// Insert inside another element
document.getElementById("container").appendChild(newDiv);
````








