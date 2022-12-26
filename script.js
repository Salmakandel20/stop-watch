var stopwatch=document.querySelector(".stopwatch")
var hr=0,sec=0,min=0;
var action = true;
var start=document.querySelector("#start")
var stopp =document.querySelector("#stop")
var Reset=document.querySelector("#reset")

function startTime(){
    if(action == true){
        action= false
        time()
    }}
function time(){
    if(action == false){
    sec = parseInt(sec);
     min = parseInt(min);
      hr = parseInt(hr);
   
    
    
     sec=sec+1
     if (sec == 60) 
    { min = min + 1; sec = 0; } 
    if (min == 60) 
    { hr = hr + 1; min = 0; sec = 0; } 
    if (sec < 10 || sec == 0) 
    { sec = '0' + sec; } 
    if (min < 10 || min == 0) 
    { min = '0' + min; } 
    if (hr < 10 || hr == 0)
     { hr = '0' + hr; } 
      stopwatch.innerHTML = hr + ':' + min + ':' + sec; 
     setTimeout("time()",10)
    
     
}}
function restTime(){
    hr=0,min=0,sec=0
    stopwatch.innerHTML = '00:00:00';
    action=true
    
    
}
function stopTime(){console.log(action)
    // if(action == false){
        action= true
    console.log(action)}
    // }
    
    
      



start.addEventListener("click",startTime)
Reset.addEventListener("click",restTime)
stopp.addEventListener("click",stopTime)
