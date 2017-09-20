window.onload=function(){
	let list=document.getElementsByClassName('list')[0];
	let lis=list.getElementsByTagName('li');
	let right=list.getElementsByClassName('right-right');
	//////////////////////////////////////
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			right[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			right[i].style.display='none';
		}
	}
	//////////////////////////////////////////
	let ban=document.getElementsByClassName('banner')[0];
	let liss=ban.getElementsByTagName('li');
	let btn=document.getElementsByClassName('btn-list')[0];
	let liss1=btn.getElementsByTagName('li');
	let big=document.getElementsByClassName('big-box')[0];
	let lefts=big.getElementsByClassName('banner-left')[0];
	let rights=big.getElementsByClassName('banner-right')[0];
     ////////////////////////////////////////
     let num=0;
     let t  = setInterval(run,3000);
     big.onmouseover=function(){
     	clearInterval(t);
     }
     big.onmouseout=function(){
        t=setInterval(run,3000);
     }
     /////////////////////////////////////////
    //  let now=0;
    //    for(let i=0;i<liss1.length;i++){
    //    	liss1[i].onclick=function(){
    //    		liss1[now].style.background='#77777e';
       		
    //    		liss[now].style.display='none';
    //    		liss[i].style.display='block';
    //    		liss1[i].style.background='#fff';
    //    		now=i;
       		
    //     }

    // }
    for(let i=0;i<liss.length;i++){
    	liss1[0].style.background='#fff';
	 	liss1[i].onclick=function(){
	 		for(let i=0;i<liss1.length;i++){
	 	   liss1[i].style.background='#98979B';
	 	   liss[i].style.display='none';
	 	}
		
	 	   liss1[i].style.background='#fff';
	 	   liss[i].style.display='block';
	 	   num=i;
 	}
    }
    /////////////////////////////////////////
      lefts.onclick=function(){
      	runl();
      }
      rights.onclick=function(){
      	run();
      }
    ///////////////////////////////////////////
     function run(){
     	 num++;
     	if(num==liss.length){
     		num=0;
     	}
     	for(let i=0;i<liss.length;i++){
     		liss1[i].style.background='#77777e';
     		liss[i].style.display='none';
     	}
        liss[num].style.display='block';
        liss1[num].style.background='#fff';
     
     }
      function runl(){
     	 num--;
     	if(num<0){
     		num=liss.length-1;
     	}
     	for(let i=0;i<liss.length;i++){
     		liss1[i].style.background='#77777e';
     		liss[i].style.display='none';
     	}
        liss[num].style.display='block';
        liss1[num].style.background='#fff';
     
     }
     ////////////////////////////////////////////

}
