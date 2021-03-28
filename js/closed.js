$(document).ready(function(){
    $('.bClosed').click(function(){
        var element = document.getElementById("cmd-father");
        element.classList.add("hide");
        console.log("apertou");
    });
});