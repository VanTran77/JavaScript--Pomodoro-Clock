let btnStart = document.getElementById('start');
let btnPause = document.getElementById('pause');
let btnReset = document.getElementById('reset');

let workMin = document.getElementById('workmin');
let workSec = document.getElementById('worksec');
let breakMin = document.getElementById('breakmin');
let breakSec = document.getElementById('breaksec');

let wClockMin = document.getElementById('workClockMin');
let wClockSec = document.getElementById('workClockSec');
let bClockMin = document.getElementById('breakClockMin');
let bClockSec = document.getElementById('breakClockSec');

let countTime = document.getElementById('counterTime');

var counter = 0;
var myInterval;
var pauseTime = false;

function stopTimer() {
    clearInterval(myInterval);
    myInterval=undefined;
}

btnStart.addEventListener('click', function(){
    if (pauseTime == false){
        wClockSec.innerText = parseInt(workSec.value) || 0;
        wClockMin.innerText = parseInt(workMin.value) || 0;
        bClockSec.innerText = parseInt(breakSec.value) || 0 ;
        bClockMin.innerText = parseInt(breakMin.value) || 0 ;
    }
    if(myInterval === undefined){
        if(workMin.value != 0 || workSec.value!= 0 || breakMin.value!= 0 || breakSec.value!=0){
            workCountDown();
        } else if (workMin.value==0 && workSec.value==0 && breakMin.value==0 && breakSec.value==0) {
            workMin.value = "25";
            workSec.value = "0";
            breakMin.value = "5";
            breakSec.value = "0";
            bClockMin.innerText = "05";
            bClockSec.innerText = "00";
            console.log(breakMin.value);
            workCountDown();}
    }else 
        alert("Time is runing");
})

btnPause.addEventListener('click', function(){
    clearInterval(myInterval);
    myInterval=undefined;
    pauseTime = true;
})

btnReset.addEventListener('click', function(){
    wClockMin.innerText = "25";
    wClockSec.innerText = "00";
    bClockMin.innerText = "05";
    bClockSec.innerText = "00";
    workMin.value = "00";
    workSec.value = "00";
    breakMin.value = "00";
    breakSec.value = "00";
    countTime.innerText = 0;
    pauseTime = false;
    stopTimer();
})

function workCountDown(){
    myInterval = setInterval(workTime, 1000);
    function workTime(){
        if(wClockSec.innerText >0) {
        wClockSec.innerText --;
        } else if (wClockMin.innerText !=0 && wClockSec.innerText == 0){
        wClockSec.innerText = 59;
        wClockMin.innerText --;
        } if (wClockMin.innerText == 0 && wClockSec.innerText == 0){
            stopTimer();
            breakCountDown();
        }
    }
}

function breakCountDown(){
    myInterval = setInterval(breakTime, 1000);
    function breakTime(){
        if(bClockSec.innerText >0) {
        bClockSec.innerText --;
        } else if (bClockMin.innerText !=0 && bClockSec.innerText == 0){
        bClockSec.innerText = 59;
        bClockMin.innerText --;
        } if (bClockMin.innerText == 0 && bClockSec.innerText == 0){
            stopTimer();
            countTime.innerText ++ ;
            wClockSec.innerText = parseInt(workSec.value) || 0;
            wClockMin.innerText = parseInt(workMin.value) || 0;
            bClockSec.innerText = parseInt(breakSec.value) || 0 ;
            bClockMin.innerText = parseInt(breakMin.value) || 0 ;
            workCountDown();
        }
    }
}

