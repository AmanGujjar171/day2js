var a = +prompt("enter your number");
let b = prompt("enter your operator");
var c = +prompt("enter your number");

if (b == "+"){
    document.write(a + c);
}
else if (b == "-"){
    document.write(a - c);
}
else if (b == "*"){
    document.write(a * c);
}
else if (b == "/"){
    document.write(a / c);
}
else{ 
    document.write("its not a number");
}