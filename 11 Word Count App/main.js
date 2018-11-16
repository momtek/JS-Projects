let print = function(message) {
  document.getElementById("output").innerHTML = "Lenght is " + message;
}

document.getElementById("btn").onclick = function(evt) {
  print(document.getElementById("str").nodeValue.length);
}