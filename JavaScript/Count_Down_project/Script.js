
 const yr="01/01/2022"

function countDown(){
    
    

const nyr=new Date(yr);

const d=new Date();

const diff=nyr.getTime()-d.getTime();
// year=Math.floor(diff/(1000*3600*24*7*4*12))
// month=Math.floor(diff/(1000*3600*24*7*4))
// week=Math.floor(diff/(1000*3600*24*7))
day=Math.floor(diff/(1000*3600*24))
hour=Math.floor(diff/(1000*3600))%24;
min=Math.floor(diff/(1000*60))%60;
sec=Math.floor(diff/1000)%60
ms=diff;
console.log(day, hour, min, sec, ms)
document.getElementById("days").innerHTML=day;
document.getElementById("hours").innerHTML=formatTime(hour);
document.getElementById("mins").innerHTML=formatTime(min);
document.getElementById("sec").innerHTML=formatTime(sec);

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown,1000)
// function takeValue(){
//     let cal=document.getElementById("user-input").value;
// }


