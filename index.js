var screen = document.getElementById("displaybox");

function handleseven(){
  screen.value += document.getElementById("seven").value;
console.log(screen.value);
}

function handleeight(){
  screen.value += document.getElementById("eight").value;
console.log(screen.value);
}

function handlenine(){
  screen.value += document.getElementById("nine").value;
console.log(screen.value);
}

function handlefour(){
  screen.value += document.getElementById("four").value;
console.log(screen.value);
}

function handlefive(){
  screen.value += document.getElementById("five").value;
console.log(screen.value);
}

function handlesix(){
  screen.value += document.getElementById("six").value;
console.log(screen.value);
}

function handleone(){
  screen.value += document.getElementById("one").value;
console.log(screen.value);
}

function handletwo(){
  screen.value += document.getElementById("two").value;
console.log(screen.value);
}

function handlethree(){
  screen.value += document.getElementById("three").value;
console.log(screen.value);
}

function handlezero(){
  screen.value += document.getElementById("zero").value;
console.log(screen.value);
}

function handleclear(){
  screen.value = "";
}

function handledivision(){
  screen.value += "/";
  
}

function handleaddition(){
  screen.value += "+";
  
}
function handlemultiplication(){
  screen.value += "*";
  
}

function handlesubtraction(){
  screen.value += "-";
  
}
function handledot(){
  screen.value += document.getElementById("dot").value;
console.log(screen.value);
}

function handleEqual(){
  const result = eval(screen.value)
  screen.value = result;
  
}