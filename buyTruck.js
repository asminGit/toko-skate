var belitruck = document.getElementById("beli-truck")
var beliclick = document.getElementById("buy-click3")
var backk = document.getElementById("kembali-truck");
var truck1 = document.getElementById("truck1");
var truck2 = document.getElementById("truck2");
var Ptruck1 = document.getElementById("p-truck1");
var Ptruck2 = document.getElementById("p-truck2");

belitruck.style.display = "none";
truck2.style.display = "none"


beliclick.addEventListener("click", function(){
    if(belitruck.style.display = "none"){
        belitruck.style.display = "block";
        belitruck.style.display = "flex";
    }

})

backk.addEventListener("click", function(){
    if(belitruck.style.display = "block"){
        belitruck.style.display = "none";
        belitruck.style.display = "none";

    }
})

Ptruck2.addEventListener("click", function(){
    if(truck2.style.display = "none"){
        truck2.style.display = "block"
        truck2.style.display = "flex";
        truck1.style.display = "none"
        Ptruck1.style.outline = "none"
        Ptruck2.style.outline = "1px solid brown"
        
    }
})

Ptruck1.addEventListener("click", function(){
    if(truck1.style.display = "none"){
        truck1.style.display = "block"
        truck1.style.display = "flex";
        truck2.style.display = "none"
        Ptruck2.style.outline = "none"
        Ptruck1.style.outline = "1px solid brown"
        
    }
})