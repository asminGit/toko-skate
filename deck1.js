const back = document.getElementById("kembali");
const deckContainer = document.getElementById("card-deck1");
const buy = document.getElementById("buy");
const deck2 = document.getElementById("deck2");
const deck1 = document.getElementById("deck1");
const deck2Click = document.getElementById("deck2-click");
const deck1Click = document.getElementById("deck1-click");

deckContainer.style.display = "none";
deck2.style.display = "none"


buy.addEventListener("click", function(){
    if(deckContainer.style.display = "none"){
        deckContainer.style.display = "block";
        deckContainer.style.display = "flex";
    }
})


back.addEventListener("click", function(){
    if(deckContainer.style.display = "block"){
        deckContainer.style.display = "none";
        deckContainer.style.display = "none";
    }

})

deck2Click.addEventListener("click", function(){
    if(deck2.style.display = "none"){
        deck2.style.display = "block";
        deck1.style.display = "none";
        deck2Click.style.outline = "1px solid red"
        deck1Click.style.outline = "none"
        deck2,style.display = "flex";
    }
})

deck1Click.addEventListener("click", function(){
    if(deck1.style.display = "none"){
        deck1.style.display = "block";
        deck2.style.display = "none";
        deck1Click.style.outline = "1px solid red"
        deck2Click.style.outline = "none"
        deck1,style.display = "flex";
    }
})



