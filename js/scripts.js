
function slideA2(){
    document.getElementById("a1").style.background="#ffffff"
    document.getElementById("a2").style.background="#4E93DE"
    document.getElementById("sl-1").style.display="none"
    document.getElementById("sl-2").style.display="block"
}
function slideA1(){
    document.getElementById("a2").style.background="#ffffff"
    document.getElementById("a1").style.background="#4E93DE"
    document.getElementById("sl-2").style.display="none"
    document.getElementById("sl-1").style.display="block"
}

function showCat(){
    document.getElementById("dog").style.display="none"
    document.getElementById("cat-bt").style.background="#6AA5e3"
    document.getElementById("cat").style.display="block"
    document.getElementById("dog-bt").style.background="#f1f9fd"
}
function showDog(){
    document.getElementById("cat").style.display="none"
    document.getElementById("cat-bt").style.background="#f1f9fd"
    document.getElementById("dog-bt").style.background="#6AA5e3"
    document.getElementById("dog").style.display="block"
}