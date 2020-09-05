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
  },250)

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
  },250)
  
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
  },250)

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
  },250)

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
  document.getElementsByClassName('game').style.opacity = '0.1';
  
  if(time<=7)
  {
	 document.querySelector('.remark').innerHTML="<h4> !!Excellent!!</h4>";
  }
  else  if(time>7 && time<=15)
  {
    document.querySelector('.remark').innerHTML="<h4> !Good!</h4>";
  }
  
  else  if(time>15 && time<=28)
  {
    document.querySelector('.remark').innerHTML="<h4> You took too much time:|</h4>";
  }
  else{
    document.querySelector('.remark').innerHTML="<h4> Very poor:(</h4>";
  }
}

// Collision Detection

setInterval(() => {
	
	var playerpos=document.getElementById('char').getBoundingClientRect();


	var car00pos = document.getElementById('00').getBoundingClientRect();
	var car01pos = document.getElementById('01').getBoundingClientRect();
	var car02pos = document.getElementById('02').getBoundingClientRect();
	var car03pos = document.getElementById('03').getBoundingClientRect();

	var car10pos = document.getElementById('10').getBoundingClientRect();
	var car11pos = document.getElementById('11').getBoundingClientRect();
	var car12pos = document.getElementById('12').getBoundingClientRect();
	var car13pos = document.getElementById('13').getBoundingClientRect();

	var car20pos = document.getElementById('20').getBoundingClientRect();
	var car21pos = document.getElementById('21').getBoundingClientRect();
	var car22pos = document.getElementById('22').getBoundingClientRect();
	var car23pos = document.getElementById('23').getBoundingClientRect();

	var car30pos = document.getElementById('30').getBoundingClientRect();
	var car31pos = document.getElementById('31').getBoundingClientRect();
	var car32pos = document.getElementById('32').getBoundingClientRect();
	var car33pos = document.getElementById('33').getBoundingClientRect();
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
		(car02pos.x <= playerpos.x + playerpos.width)&&(car02pos.x + car02pos.width >= playerpos.x)&&(car02pos.y <= playerpos.y + playerpos.height)&&(car02pos.y + car02pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car03pos.x <= playerpos.x + playerpos.width)&&(car03pos.x + car03pos.width >= playerpos.x)&&(car03pos.y <= playerpos.y + playerpos.height)&&(car03pos.y + car01pos.height >= playerpos.y)
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
		(car12pos.x <= playerpos.x + playerpos.width)&&(car12pos.x + car12pos.width >= playerpos.x)&&(car12pos.y <= playerpos.y + playerpos.height)&&(car12pos.y + car12pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car13pos.x <= playerpos.x + playerpos.width)&&(car13pos.x + car13pos.width >= playerpos.x)&&(car13pos.y <= playerpos.y + playerpos.height)&&(car13pos.y + car13pos.height >= playerpos.y)
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
		(car22pos.x <= playerpos.x + playerpos.width)&&(car22pos.x + car22pos.width >= playerpos.x)&&(car22pos.y <= playerpos.y + playerpos.height)&&(car22pos.y + car22pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car23pos.x <= playerpos.x + playerpos.width)&&(car23pos.x + car23pos.width >= playerpos.x)&&(car23pos.y <= playerpos.y + playerpos.height)&&(car23pos.y + car23pos.height >= playerpos.y)
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
	else if(
		(car32pos.x <= playerpos.x + playerpos.width)&&(car32pos.x + car32pos.width >= playerpos.x)&&(car32pos.y <= playerpos.y + playerpos.height)&&(car32pos.y + car32pos.height >= playerpos.y)
		){
			game = false; gameOver();
		}
	else if(
		(car33pos.x <= playerpos.x + playerpos.width)&&(car33pos.x + car33pos.width >= playerpos.x)&&(car33pos.y <= playerpos.y + playerpos.height)&&(car33pos.y + car33pos.height >= playerpos.y)
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
	document.querySelector('.remark-f').innerHTML="<h4> Visit a doctor soon! </h4>";
}