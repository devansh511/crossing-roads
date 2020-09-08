// Vehicles

var r_vehicles = ['001-bulldozer', '003-truck', '004-truck', '008-fire truck', '022-truck', '020-tow truck', '016-mixer truck','010-garbage truck', '011-truck'];

var l_vehicles = ['002-truck', '005-crane', '006-crane truck', '009-forklift', '012-truck', '015-road roller', '017-jeep', 'car', 'jeep', 'school-bus', 'sport-car', 'station-wagon', 'tourism'];

 // Left to right Movement
 
setInterval(()=>{
 
	const car=document.querySelectorAll('.car1');

    car.forEach((car)=>{
    
    car.style.backgroundImage = "url('./assets/png/school-bus.png')";
	
	var vpos=car.offsetLeft;
    
    var d=vpos+50;
	
	car.style.left= d+'px';
	
	if(d>window.innerWidth)
	{
      car.style.left= 0+'px';
      
    }
  
  })
  },500)

setInterval(()=>{
 
	const car2=document.querySelectorAll('.car2');

    car2.forEach((car)=>{
    
    car.style.backgroundImage = "url('./assets/png/sport-car.png')";
    var vpos=car.offsetLeft;
    
	var d=vpos+50;
	car.style.left= d+'px';
    if(d>window.innerWidth)
    {
      car.style.left=0+'px';
      
    }
  
  })
  },500)
  
 // Right to Left Movement 

setInterval(()=>{
	const carl=document.querySelectorAll('.car-l1');
	
	carl.forEach((car)=>{
    
	car.style.backgroundImage = "url('./assets/png/022-truck.png')";
    var vpos=car.offsetLeft;
    
    var d=vpos-50;
    car.style.left= d+'px'
    if(d<0)
    {
      car.style.left=window.innerWidth +'px'
      
    }
  
  })
  },500)

setInterval(()=>{
	const carl2=document.querySelectorAll('.car-l2');
	
	carl2.forEach((car)=>{
    
    car.style.backgroundImage = "url('./assets/png/010-garbage truck.png')";
    var vpos=car.offsetLeft;
    
    var d=vpos-50;
    car.style.left= d+'px'
    if(d<0)
    {
      car.style.left=window.innerWidth+'px'
      
    }
  
  })
  },500)

// Movement of character

window.onkeydown = detectKey;
var game=true;
function detectKey(e) {

    var posLeft = document.getElementById('char').offsetLeft;
	var posTop = document.getElementById('char').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
		// up arrow
		if((posTop < 20 && posTop >= 0) || posTop < 0)
		{
      		game=false
			success();
		}
		else
			document.getElementById('char').style.top = (posTop-25)+"px";
    }
    else if (e.keyCode == '40') {
		// down arrow
		if(posTop > window.innerHeight )
			alert('You are about to leave the road');
		else
			document.getElementById('char').style.top = (posTop+25)+"px";
    }
    else if (e.keyCode == '37') {
	   // left arrow
		if(posLeft < 0)
			alert('You are about to leave the road');
	   else
	   	document.getElementById('char').style.left = (posLeft-25)+"px";
    }
    else if (e.keyCode == '39') {
	   // right arrow
	   if(posLeft > window.innerWidth)
			alert('You are about to leave the road');
		else
			document.getElementById('char').style.left = (posLeft+25)+"px";
    }
}  

//Stopwatch

let time = 0;
setInterval(() =>{

  if(game==true)
  {
    time += 1;
    document.getElementById('seconds').innerHTML = time;
  }
}, 1000);

// Finish line

function success() {
  document.querySelector('.content').style.display = 'block';
  document.querySelector('.content').style.backgroundPosition='fixed';
  document.querySelector('.content').style.zIndex='2';
  document.querySelector('.final-score').innerHTML=time;
  
  if(time<=7)
  {
	 document.querySelector('.remark').innerHTML="!!Excellent!!";
  }
  else  if(time>7 && time<=15)
  {
    document.querySelector('.remark').innerHTML="!Good!";
  }
  
  else  if(time>15 && time<=28)
  {
    document.querySelector('.remark').innerHTML="You took too much time:|";
  }
  else{
    document.querySelector('.remark').innerHTML="Very poor:(";
  }
}

// Collision Detection

setInterval(() => {
	
	var playerpos=document.getElementById('char').getBoundingClientRect();

	
	var car00pos = document.getElementById('00').getBoundingClientRect();
	var car01pos = document.getElementById('01').getBoundingClientRect();
    
    var car10pos = document.getElementById('10').getBoundingClientRect();
    var car11pos = document.getElementById('11').getBoundingClientRect();

	var car20pos = document.getElementById('20').getBoundingClientRect();
	var car21pos = document.getElementById('21').getBoundingClientRect();

	var car30pos = document.getElementById('30').getBoundingClientRect();
	var car31pos = document.getElementById('31').getBoundingClientRect();
	if(
	(car00pos.x <= playerpos.x + playerpos.width)&&(car00pos.x + car00pos.width >= playerpos.x)&&(car00pos.y <= playerpos.y + playerpos.height)&&(car00pos.y + car00pos.height >= playerpos.y)
	){
		game = false; gameOver();
	}
	else if(
		(car01pos.x <= playerpos.x + playerpos.width)&&(car01pos.x + car01pos.width >= playerpos.x)&&(car01pos.y <= playerpos.y + playerpos.height)&&(car01pos.y + car01pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car10pos.x <= playerpos.x + playerpos.width)&&(car10pos.x + car10pos.width >= playerpos.x)&&(car10pos.y <= playerpos.y + playerpos.height)&&(car10pos.y + car10pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car11pos.x <= playerpos.x + playerpos.width)&&(car11pos.x + car11pos.width >= playerpos.x)&&(car11pos.y <= playerpos.y + playerpos.height)&&(car11pos.y + car11pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car20pos.x <= playerpos.x + playerpos.width)&&(car20pos.x + car20pos.width >= playerpos.x)&&(car20pos.y <= playerpos.y + playerpos.height)&&(car20pos.y + car20pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car21pos.x <= playerpos.x + playerpos.width)&&(car21pos.x + car21pos.width >= playerpos.x)&&(car21pos.y <= playerpos.y + playerpos.height)&&(car21pos.y + car21pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car30pos.x <= playerpos.x + playerpos.width)&&(car30pos.x + car30pos.width >= playerpos.x)&&(car30pos.y <= playerpos.y + playerpos.height)&&(car30pos.y + car30pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car31pos.x <= playerpos.x + playerpos.width)&&(car31pos.x + car31pos.width >= playerpos.x)&&(car31pos.y <= playerpos.y + playerpos.height)&&(car31pos.y + car31pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
}, 250);

// Game Over

function gameOver() {
	document.querySelector('.content-f').style.display = 'block';
	document.querySelector('.content-f').style.backgroundPosition='fixed';
	document.querySelector('.content-f').style.zIndex='2';
	document.querySelector('.final-score').innerHTML='0';

	document.querySelector('.remark-f').innerHTML=" Visit a doctor soon! ";
}