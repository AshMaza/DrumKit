let n=document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var getsound=this.innerHTML;
        extract(getsound);
        buttonAnimation(getsound);
    });
}

document.addEventListener("keypress",function(event){
    let getkey=event.key;
    extract(getkey);
    buttonAnimation(getkey);
});

function extract(arbitrary){
    switch (arbitrary) {
        case "m":
            var first=new Audio("sounds/tom-1.mp3");
            first.play();
            break;
        case "a":
            var second=new Audio("sounds/tom-2.mp3");
            second.play();
            break;
        case "z":
            var third=new Audio("sounds/tom-3.mp3");
            third.play();
            break;
        case "x":
            var fourth=new Audio("sounds/tom-4.mp3");
            fourth.play();
            break;
        case "h":
            var fifth=new Audio("sounds/snare.mp3");
            fifth.play();
            break;
        case "i":
            var sixth=new Audio("sounds/crash.mp3");
            sixth.play();
            break;
        case "r":
            var seventh=new Audio("sounds/kick-bass.mp3");
            seventh.play();
            break;
        default: console.log(getkey);
    }
}

function buttonAnimation(x){
    let activeButton=document.querySelector("."+x)
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },200);
}