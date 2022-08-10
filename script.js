let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let numberOfTimes = 0;
let button = document.getElementById("clicked");

button.onclick = function(){

    numberOfTimes++;
    
    if(numberOfTimes==1){
        one.style.display = "flex";
        two.style.display = "none";
        three.style.display = "none";
    }else if(numberOfTimes==2){
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "flex";
    }
};