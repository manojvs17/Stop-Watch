let milliseconds=0,seconds=0,minutes=0,hours=0;
let timerRef=document.querySelector('.timerDisplay');
let int=null;
function buttonStart(){
    if(int!=null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}
function buttonStop(){
    clearInterval(int);
}
function buttonReset(){
    clearInterval(int);
    milliseconds=0,seconds=0,minutes=0,hours=0;
    timerRef.innerHTML="00 : 00 : 00 : 000";
}
function displayTimer(){
    milliseconds+=10;
    if(milliseconds>1000){
        seconds++;
        milliseconds=0;
        if(seconds>60){
            minutes++;
            seconds=0;
            if(minutes>60){
                hours++;
                minutes=0;
            }
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    let ms=milliseconds<10?"00"+milliseconds:milliseconds<100?"0"+milliseconds:milliseconds;
    timerRef.innerHTML=`${h} : ${m} : ${s} : ${ms}`;
}