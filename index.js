function clear_screen(){
    document.getElementById("result").value="";
}
function display(value){
document.getElementById("result").value+=value;
}
function Calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function backspace(){
    let a =document.getElementById("result").value;
    let ab = a.slice(0,-1);
    document.getElementById("result").value= ab;
}

