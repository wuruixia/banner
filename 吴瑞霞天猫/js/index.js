window.onload=function(){
	let cebian=document.getElementsByClassName('nav-left1')[0];
    let lis=cebian.getElementsByTagName('li');
    let items=cebian.getElementsByClassName('aside-right');
    for(let i=0;i<lis.length;i++){
         lis[i].onmouseover=function(){
         	items[i].style.display='block';
         }
         lis[i].onmouseout=function(){
         	items[i].style.display='none';

         }
    }


    //
    let btn=document.getElementsByClassName('btn')[0];
	let list=btn.getElementsByTagName('li');
	let navbox=document.getElementById('tupian');
	let list1 =navbox.getElementsByTagName('li');

	
      // let now=0;
      // for(let i=0;i<list.length;i++){
      // 	list[i].onmouseover=function(){
      // 		list1[now].style.display='none';
      // 		list1[i].style.display='block';
      // 		now=i;
      // 	}
      	
      // }	   
      //  let now=0;
      //  for(var i=0;i<list.length;i++){
      //  	list[i].index=i;

      //  	list[i].onmouseover=function(){
      //  		list1[now].style.display='none';
      //  		list1[this.index].style.display='block';
      //  		now=this.index;
     	// }
      	
      // }
      // let now=0;
      //  for(var i=0;i<list.length;i++){
      //  	// list[i].index=i;
       	
      //  	list[i].onmouseover=(function(i){
      //  		return function(){
      //  		list1[now].style.display='none';
      //  		list1[i].style.display='block';
      //  		now=i;
     	// }
      //  	})(i)
      	
      // }	
     let big=document.getElementsByClassName('nav-box')[0];
     //动效
     let num=0;
     let t  = setInterval(run,3000);
     big.onmouseover=function(){
      clearInterval(t);
     }
     big.onmouseout=function(){
        t=setInterval(run,3000);
     }
     //鼠标
      for(let i=0;i<list.length;i++){
        list[0].style.background='#fff';
         list[i].onmouseover=function(){
            for(let i=0;i<list1.length;i++){
               list[i].style.background='#98979B';
                list1[i].style.display='none';
         }
    
       list[i].style.background='#fff';
       list1[i].style.display='block';
       num=i;
    }
    }
     //轮播
      function run(){
       num++;
      if(num==list1.length){
        num=0;
      }
      for(let i=0;i<list.length;i++){
        list[i].style.background='#77777e';
        list1[i].style.display='none';
      }
        list1[num].style.display='block';
        list[num].style.background='#fff';
     
     }



}

			      	
		
