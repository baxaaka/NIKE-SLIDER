"use strict "




const next = document.querySelector(".next")
const back = document.querySelector(".back")

const slider = document.querySelector(".slider")
const slideItem =document.querySelectorAll(".slider-item")

let index=0 

function Slide(){
    if(index>slideItem.length-1){
        index=0
    }
    if(index<0){
       index=slideItem.length-1;
    }
   
    slider.style.transform = `translateX(-${index*1700}px)`
}

 $(".next").addEventListener("click", ()=>{
  index++;
  Slide()
  Slide2()
  console.log(index);
  
 })
 
$(".back").addEventListener("click", ()=>{
    index--;
    Slide()
    Slide2()
    console.log(index);
   
   })

  
//    --- audio ---

 
function play(){
    var audio = new Audio("./audio/swipe.mp3")
    audio.play()
}

   

const next2 = document.querySelector(".next2")
const back2 = document.querySelector(".back2")

const slider2 = document.querySelector(".slider2")
const slideItem2 =document.querySelectorAll(".slider-item2")



let index2=0 

function Slide2(){
  
   
    slider2.style.transform = `translateX(${index*1440}px)`
}
