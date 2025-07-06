let isClicked = false;
$("button").click(function(){
    if(!isClicked){
        $("h1").text("Clicked!");
        isClicked = true;
    }
    else{
        $("h1").text("Clicked Again!")
        isClicked = false;
    }
})