var y = 0;
function boasVindas(){
    var x = document.querySelector("h3");
    x.textContent = "BEM-VINDO";
}

function change(){
    var x = document.querySelector("#nome");
    y++
    x.style.color = changeColor(y % 6);
    console.log("haha")
}

function changeColor(n){
    colors = ["blue","red","green","turquoise","purple","yellow"]
    return colors[n]
}

window.onload = boasVindas();