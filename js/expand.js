$(document).ready(function(){
    $('.bExpand').click(function(){
        var element = document.getElementById("cmd-father");
        element.classList.add("expand");
        console.log("apertou");
    });
});