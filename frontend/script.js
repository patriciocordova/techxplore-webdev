var name = prompt("Hi, what's your name?");
if(name && name != "null" && name.length > 0){
  document.getElementById("visitor").innerHTML = name;
}