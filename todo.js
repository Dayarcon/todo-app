function addtask() {
    const li = document.createElement("li");
    const inputElement = document.getElementById("detail")
    var inputValue = inputElement.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
        li.id=inputValue;
      document.getElementById("myUL").appendChild(li);
    }
    inputElement.value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener("click", removeTask);
}
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI"){
        ev.target.classList.toggle('checked');
    }
}, false);

function removeTask(element){
    this.parentElement.remove();
}