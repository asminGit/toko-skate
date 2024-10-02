var loveClck = document.getElementById("love-c");
var loveNone = document.getElementById("love-n");

loveClck.style.display = "none";

loveNone.addEventListener("click", function(){
    if(loveClck.style.display = "none"){
        loveClck.style.display = "block";
        loveClck.style.display = "flex";
        loveNone.style.display = "none"
        loveNone.style.overflow = "hidden"
    }

})

loveClck.addEventListener("click", function(){
    if(loveNone.style.display = "none"){
        loveNone.style.display = "block";
        loveNone.style.display = "flex";
        loveClck.style.display= "none"
    }
})