const text="💕 You are really Awesome!! 💕 ";
let index=0
function writeText(){
    document.body.innerText=text.slice(0,index);
    
    if(index>text.length-1)
    {
        index=0;
    }
    index++;
}
setInterval(writeText, 150);