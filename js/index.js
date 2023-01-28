function under() {
  var txt = document.getElementById("text");

  if (txt.style.textDecoration == "underline") {
    txt.style.textDecoration = "none";
    txt.style.color = "black";
  } else {
    txt.style.textDecoration = "underline";
    txt.style.color = "red";
  }
}

function changeBackground() {
  var txt = document.getElementById("text");

  if (txt.style.backgroundColor == "white") {
    txt.style.background = "yellow";
    txt.style.color = "black";
  } else if (txt.style.backgroundColor == "red") {
    txt.style.background = "blue";
    txt.style.color = "yellow";
  } else if (txt.style.backgroundColor == "blue") {
    txt.style.background = "white";
    txt.style.color = "black";
  } else {
    txt.style.background = "red";
    txt.style.color = "yellow";
  }
}

function changeTexto() {
  var txt = document.getElementById("text");

  if (txt.style.color == "white") {
    txt.style.color = "black";
  } else if (txt.style.color == "red") {
    txt.style.color = "blue";
  } else if (txt.style.color == "blue") {
    txt.style.color = "yellow";
  } else {
    txt.style.color = "red";
  }
}

function sizTexto() {
  var txt = document.getElementById("text");

  if (txt.style.fontSize == "larger") {
    txt.style.color = "black";
    txt.style.backgroundColor = "white";
    txt.style.fontSize = "medium";
  } else if (txt.style.fontSize == "x-large") {
    txt.style.color = "yellow";
    txt.style.backgroundColor = "red";
    txt.style.fontSize = "larger";
  } else if (txt.style.fontSize == "xx-large") {
    txt.style.color = "yellow";
    txt.style.backgroundColor = "blue";
    txt.style.fontSize = "x-large";
  } else {
    txt.style.fontSize = "xx-large";
    txt.style.color = "black";
    txt.style.backgroundColor = "yellow";
  }
}
