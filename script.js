var frist = document.querySelector(".opt1");
var second = document.querySelector(".opt2");
var change = document.querySelector(".change");
var opt1 = document.querySelector(".opt h1");
var opt2 = document.querySelector(".opt2 h1");



frist.addEventListener("click",function(){
    second.style.display = "block";
    change.style.rotate = "180deg"
});


second.addEventListener("click",function(){
    second.style.display = "none";
    change.style.rotate = "360deg";
    

})
