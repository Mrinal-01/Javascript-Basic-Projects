function createHeart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
   
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+3+"s";
    
    heart.innerText='💜';
    document.body.appendChild(heart);


    const name=document.createElement("div");
    name.classList.add("heart");
    name.style.left=Math.random()*500+"vw";
    name.style.animationDuration=Math.random()*2+4+"s";
    name.innerText=' MB ';
    document.body.appendChild(name);

    setTimeout(()=>
    {
        heart.remove();
    },5000);
}

setInterval(createHeart,80);



