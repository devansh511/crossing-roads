
setInterval(()=>{
 

  const car=document.querySelectorAll('.car');

car.forEach((car)=>{
  

  var vpos=car.offsetLeft;
  
  var d=vpos+50;
  car.style.left= d+'px'
  if(d>window.innerWidth)
  {
    car.style.left=50+'px'
    
  }

})
},200)


setInterval(()=>{
 

  const carl=document.querySelectorAll('.car-l');

carl.forEach((car)=>{
  

  var vpos=car.offsetLeft;
  
  var d=vpos-50;
  car.style.left= d+'px'
  if(d<0)
  {
    car.style.left=window.innerWidth+100+'px'
    
  }

})
},250)