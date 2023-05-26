(function(){
    "use strict";
    const btn=document.querySelectorAll('button');
    var myImages=['images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg'];
    var currentImg= 0;
    btn[1].addEventListener('click',function(e){
        e.preventDefault();
        currentImg++;
        if(currentImg>8){
            currentImg=0;
    }
        let image=document.querySelector('img');
        image.src=myImages[currentImg];
   

    });

    btn[0].addEventListener('click',function(e){
        e.preventDefault();
        currentImg--; 
        if(currentImg<0){
            currentImg=8;
        }
        let imagex=document.querySelector('img');
        imagex.src=myImages[currentImg];
    })
}())