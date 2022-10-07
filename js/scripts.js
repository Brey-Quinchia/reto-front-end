
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

function showCat(newColor){
    cat_bt = document.getElementById("cat-bt")
    dog_bt = document.getElementById("dog-bt")
    document.getElementById("dog").style.display="none"
    document.getElementById("cat").style.display="block"
    //cat_bt.style.background=newColor
    cat_bt.style.background="#6AA5e3"
    cat_bt.style.color="#ffffff"
    dog_bt.style.background=newColor
    dog_bt.style.color="#2C4674"
    
}
function showDog(){
    cat_bt = document.getElementById("cat-bt")
    dog_bt = document.getElementById("dog-bt")
    dog_bt.style.color="#ffffff"
    dog_bt.style.background="#6AA5e3"
    document.getElementById("cat").style.display="none"
    document.getElementById("dog").style.display="block"
    cat_bt.style.background="#f1f9fd"
    cat_bt.style.color="#2C4674"

}