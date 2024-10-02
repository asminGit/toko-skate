var nolove = document.getElementById("nol-truck");
var love = document.getElementById("truckLove");

love.style.display = "none";

nolove.addEventListener("click", function(){
    if(love.style.display = "none"){
        love.style.display = "block";
        nolove.style.display = "none";
    }
})


love.addEventListener("click", function(){
    if(nolove.style.display = "none"){
        nolove.style.display = "block";
        love.style.display = "none";
    }
})