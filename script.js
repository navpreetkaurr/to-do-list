
// creating a close button
var mylist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < mylist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("×");
        span.className = "close";  
        span.appendChild(txt);
        mylist[i].appendChild(span);
    }
    
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

// Creating a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Empty message!");
        }
    else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("×");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
}