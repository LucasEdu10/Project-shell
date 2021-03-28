$(document).ready(function(){
    $('.bMini').click(function(){
        var element_1 = document.getElementById("cmd-father");
        element_1.classList.add("mini");
        var element_2 = document.getElementById("content");
        element_2.style.color = 'white';
        var element_3 = document.getElementById("content-2");
        element_3.style.color = 'rgb(0 0 0 / 0%)';
        element_3.style.border = 'rgb(0 0 0 / 0%)';
        console.log("apertou");
    });
});