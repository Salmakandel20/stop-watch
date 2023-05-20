let h=0,min=0,sec=0,msec=0;
let stopWatch=document.getElementById('stopwatch')
let time
const Reset=()=>{
   Stop()
    h=0,min=0,sec=0,msec=0
    stopWatch.innerHTML='00:00:00:00'

}

const Stop=()=>{
    clearInterval(time)
}
const Start=()=>{
    Stop()

   time= setInterval(function(){
    msec=parseInt(msec)
    sec=parseInt(sec)
    min=parseInt(min)
    h=parseInt(h)
    msec++
     msec==60?(sec++ ,msec=0) :null
     sec==60?(min++ ,sec=0) :null   
     min==60?(h++ ,min=0,sec=0) :null 
    msec<10?(msec="0"+msec.toString()):msec
    sec<10?(sec="0"+sec.toString()):sec
    min<10?(min="0"+min.toString()):min
    h<10?(h="0"+h.toString()):h
    stopWatch.innerHTML=`${h}:${min}:${sec}:${msec}`
    
},1)


}



