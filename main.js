let head = document.querySelector("h1")
document.body.removeChild(head)
head = document.createElement("h1")
head.innerHTML = "Lab12 Assignment"
head.style.color = "blue"
document.body.appendChild(head)

let line = document.createElement("hr")
document.body.appendChild(line)

let subhead = document.createElement("h2")
subhead.innerHTML = "Task"
subhead.setAttribute("style", "color: red")
document.body.appendChild(subhead)

let text = document.createElement("p")
text.innerHTML = 
"In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(text)

let list = document.createElement("ul")
document.body.appendChild(list)
    let dot = document.createElement("li")
    dot.innerHTML = "find elements in the DOM (<b>5 points</b>);"
    dot.style.color = "green"
    dot.classList.add("even")
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "create/add/remove elements (<b>5 points</b>);"
    dot.style.color = "purple"
    dot.classList.add("odd")
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "change content of the elements (<b>5 points</b>);"
    dot.style.color = "green"
    dot.classList.add("even")
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "change styles of the elements (<b>5 points</b>);"
    dot.style.color = "purple"
    dot.classList.add("odd")
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "change attributes of the elements (<b>5 points</b>);"
    dot.style.color = "green"
    dot.classList.add("even")
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "change classes of the elements (<b>5 points</b>)."
    dot.style.color = "purple"
    dot.classList.add("odd")
    list.appendChild(dot)

text = document.createElement("p")
text.innerHTML = 
"Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href='https://github.com/yessen/nu_web_programming/tree/main/week12'>link.</a>"
document.body.appendChild(text)

hr = document.createElement("hr")
document.body.appendChild(hr)

subhead = document.createElement("h2")
subhead.innerHTML = "Submission"
subhead.setAttribute("style", "color: red")
document.body.appendChild(subhead)

text = document.createElement("p")
text.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(text)

list = document.createElement("ul")
document.body.appendChild(list)
    dot = document.createElement("li")
    dot.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
    dot.classList.add("even")
    dot.style.color = "green"
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "Clone this repository to your local machine and work inside it."
    dot.classList.add("odd")
    dot.style.color = "purple"
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
    dot.classList.add("even")
    dot.style.color = "green"
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
    dot.classList.add("odd")
    dot.style.color = "purple"
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
    dot.classList.add("even")
    dot.style.color = "green"
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
    dot.classList.add("odd")
    dot.style.color = "purple"
    list.appendChild(dot)

    dot = document.createElement("li")
    dot.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
    dot.classList.add("even")
    dot.style.color = "green"
    list.appendChild(dot)

line = document.createElement("hr")
document.body.appendChild(line)