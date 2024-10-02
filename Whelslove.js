var fav = document.getElementById("WhelsLove")
var noFav = document.getElementById("nolove-whels")
var listbar = document.getElementById("listbar");
var list = document.getElementById("list")
var backlist = document.getElementById("backlist");



fav.style.display = "none"
listbar.style.maxWidth = "0"


noFav.addEventListener("click", function(){
    if(fav.style.display = "none"){
        fav.style.display = "block"
        fav.style.display = "flex"
        noFav.style.display = "none"
    }
})

fav.addEventListener("click", function(){
    if(noFav.style.display = "none"){
        noFav.style.display = "block"
        noFav.style.display = "flex"
        fav.style.display = "none"
    }
})

list.addEventListener("click", function(){
    if(listbar.style.maxWidth = "0px"){
        listbar.style.maxWidth = "200px"
        listbar.style.transition = "0.5s";
    }
})

backlist.addEventListener("click", function(){
    if(listbar.style.maxWidth = "0"){
        listbar.style.maxWidth = "0px"
    }
})