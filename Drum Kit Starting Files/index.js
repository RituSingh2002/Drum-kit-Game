 
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      
      
       this.style.color="white";

    var buttonvalue1=this.innerHTML;
    makessound(buttonvalue1);
      buttonAnimation(buttonvalue1);
            
    })
}
document.addEventListener("keypress",function(event){
    makessound(event.key);
    buttonAnimation(event.key);
})
function makessound(buttonvalue){
    switch (buttonvalue) {
    case buttonvalue="w":
            var audio =new Audio("sounds/tom-1.mp3") 
            audio.play();
               break;
               case buttonvalue="a":
                var audio =new Audio("sounds/tom-2.mp3") 
                audio.play();
                   break;
                   case buttonvalue="s":
                    var audio =new Audio("sounds/tom-3.mp3") 
                    audio.play();
                       break;
                       case buttonvalue="d":
                        var audio =new Audio("sounds/tom-4.mp3") 
                        audio.play();
                           break;
                           case buttonvalue="j":
                            var audio =new Audio("sounds/crash.mp3") 
                            audio.play();
                               break;
                               case buttonvalue="k":
                                var audio =new Audio("sounds/snare.mp3") 
                                audio.play();
                                   break;
                                   case buttonvalue="l":
                                    var audio =new Audio("sounds/Kick-bass.mp3") 
                                    audio.play();
                                       break;
           default:
               break;
       }
}
// var a={
//     name="ritu",
//     age=18,
    
// };
// function House(name,age,marks){
//     this.name=name;
//     this.age=age;
//     this.marks=marks;
// }
// var obj1=new House(("sona",20,[2,5,666]));
function buttonAnimation(currenKey){
   var a= document.querySelector("."+currenKey);
   a.classList.add("pressed");
   setTimeout(function(){
       a.classList.remove("pressed");

   },100)
}