
setInterval(()=>{
 

  const car=document.querySelectorAll('.car');

car.forEach((car)=>{
  

  var vpos=car.offsetLeft;
  
  var d=vpos+50;
  car.style.left= d+'px'
  if(d>1228.8+50)
  {
    car.style.left=80+'px'
    
  }

})
},200)


setInterval(()=>{
 

  const carl=document.querySelectorAll('.car-l');

carl.forEach((car)=>{
  

  var vpos=car.offsetLeft;
  
  var d=vpos-50;
  car.style.left= d+'px'
  if(d<50)
  {
    car.style.left=1228.8+'px'
    
  }

})
},250)


var car=document.querySelector('.road-crosser')

document.addEventListener("keydown",moveplayer);
function moveplayer(key)
{

  if((key.keyCode=="38"))
{
car.style.top = (car.offsetTop -= 5) + 'px';

}

if((key.keyCode=="37"))

{
car.style.left = (car.offsetLeft -= 5) + 'px';
}

if((key.keyCode=="39"))
{
car.style.left = (car.offsetLeft += 5) + 'px';
}
if((key.keyCode=="40"))
{
car.style.top = (car.offsetTop += 5) + 'px';
}


  }    
