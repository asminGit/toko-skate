var buyWhels = document.getElementById("beli-whels");
var buyClick = document.getElementById("buy-click2");
var clikcback = document.getElementById("kembali-whels");
var whels1 = document.getElementById("whels1");
var whels2 = document.getElementById("whels2");
var whels3 = document.getElementById("whels3");
var clickWhels1 = document.getElementById("p-whels1")
var clickWhels2 = document.getElementById("p-whels2")
var clickWhels3 = document.getElementById("p-whels3")



buyWhels.style.display = "none";
whels2.style.display = "none";
whels3.style.display = "none";

buyClick.addEventListener("click", function(){
    if(buyWhels.style.display = "none"){
        buyWhels.style.display = "block";
        buyWhels.style.display = "flex";
    }
})

clikcback.addEventListener("click", function(){
    if(buyWhels.style.display = "block"){
        buyWhels.style.display = "none";
        buyWhels.style.display = "none"
    }
})

clickWhels1.addEventListener("click", function(){
    if(whels1.style.display = "none"){
        whels1.style.display = "block"
        whels1.style.display = "flex"
        whels2.style.display = "none"
        whels3.style.display = "none"
        clickWhels1.style.outline = "1px solid brown"
        clickWhels2.style.outline = "none"
        clickWhels3.style.outline = "none"
    }
})

clickWhels2.addEventListener("click", function(){
    if(whels2.style.display = "none"){
        whels2.style.display = "block"
        whels2.style.display = "flex"
        whels1.style.display = "none"
        whels3.style.display = "none"
        clickWhels2.style.outline = "1px solid brown"
        clickWhels1.style.outline = "none"
        clickWhels3.style.outline = "none"
    }
})

clickWhels3.addEventListener("click", function(){
    if(whels3.style.display = "none"){
        whels3.style.display = "block"
        whels3.style.display = "flex"
        whels2.style.display = "none"
        whels1.style.display = "none"
        clickWhels3.style.outline = "1px solid brown"
        clickWhels2.style.outline = "none"
    }
})