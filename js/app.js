// Vehicles

 



function game(speedl,speedr)
{

	

var id = setInterval(()=>{
 
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
  },speedl)

 // Right to Left Movement 

var id1 = setInterval(()=>{
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
  },speedr)


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
			allClear();
		}
		else
			document.getElementById('char').style.top = (posTop-25)+"px";
    }
    else if (e.keyCode == '40') {
		// down arrow
		if(posTop > 550 )
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
	   if(posLeft > 1300)
			alert('You are about to leave the road');
		else
			document.getElementById('char').style.left = (posLeft+25)+"px";
    }
}  

//Stopwatch

let time = 0;
var id2 = setInterval(() =>{

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

	
var id3 = setInterval(() => {
	
	var playerpos=document.getElementById('char').getBoundingClientRect();
	var car=document.querySelectorAll('.car');
	car.forEach((car)=>{

		var carpos=car.getBoundingClientRect()

		if(
			(carpos.x <= playerpos.x + playerpos.width)&&
			(carpos.x + carpos.width >= playerpos.x)&&
			(carpos.y <= playerpos.y + playerpos.height)&&
			(carpos.y + carpos.height >= playerpos.y)
			)
			{
				game = false; gameOver();
				allClear();
			}
	})


	
}, 250);

// Game Over

function gameOver() {
	document.querySelector('.content-f').style.display = 'block';
	document.querySelector('.content-f').style.backgroundPosition='fixed';
	document.querySelector('.content-f').style.zIndex='2';
	document.querySelector('.final-score').innerHTML='0';
	document.querySelector('.remark-f').innerHTML="<h4> Visit a doctor soon! </h4>";
}
}
function allClear(){
	clearInterval(id);
	clearInterval(id1);
	clearInterval(id2);
	clearInterval(id3);
}
