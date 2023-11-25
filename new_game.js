function play(audioName){
  let audio =new Audio(audioName);
  audio.loop=true;
  audio.play();
}
play("/jungle sound.mp3");




score=0;
cross=true;


document.onkeydown =function(e){
  //  console.log("key code is:",e.keyCode);
if(e.keyCode==38){
    dino=document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(()=>{dino.classList.remove('animateDino')},700);

}
if(e.keyCode==39){
  dino=document.querySelector('.dino');
 dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
 dino.style.left=dinoX+142+"px";
}
if(e.keyCode==37){
  dino=document.querySelector('.dino');
 dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
 dino.style.left=(dinoX-142)+"px";
}

   }

   setInterval(()=>{
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX =Math.abs(dx-ox);
    offsetY =Math.abs(dy-oy);
    //console.log(offsetX,offsetY);
    if(offsetX<93 && offsetY<52){
      gameover.style.visibility ='visible';
      obstacle.classList.remove('obstacleAni');
    }
else if(offsetX<145 && cross){
  score=score+1;
  updateScore(score);
  cross=false;
  setTimeout(()=>{
    cross=true;
  },100)
}

   },100)

   function updateScore(score){
    scorecard.innerHTML="Your Score:"+score;
   }