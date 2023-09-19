"use strict";
function addElement() 
{
    /*
    const li = document.createElement("li");
    li.innerHTML = "Neues Element";
    ul.appendChild(li);
    */
    
    let textInput = document.getElementById("textInput");
    let text = textInput.value;

    if(text != "")
    {

    
    let meineUL = document.getElementById("meineUL");

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    
    meineUL.appendChild(li);

    textInput.value = "";
    }
    else
    {
        alert("Sie müssen etwas eintragen");
    }
}