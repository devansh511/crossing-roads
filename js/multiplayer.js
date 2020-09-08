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
var p1=false
var p2=false
function detectKey(e) {

    var posLeft2 = document.getElementById('char-2').offsetLeft;
	var posTop2 = document.getElementById('char-2').offsetTop;
    
    var posLeft = document.getElementById('char').offsetLeft;
	var posTop = document.getElementById('char').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        
		if((posTop < 15 && posTop >= 0) || posTop < 0)
		{
              game=false
              p1=true
			success();
		}
		else
			document.getElementById('char').style.top = (posTop-25)+"px";
    }

    if (e.keyCode == '87') {
        // up arrow
        console.log('aajs')
		if((posTop2 < 15 && posTop2 >= 0) || posTop2 < 0)
		{
              game=false
              p2=true;
			success();
		}
		else
			document.getElementById('char-2').style.top = (posTop2-25)+"px";
    }

    else if (e.keyCode == '40') {
		// down arrow
		if(posTop > window.innerHeight )
			alert('You are about to leave the road');
		else
			document.getElementById('char').style.top = (posTop+25)+"px";
    }
    
    else if (e.keyCode == '83') {
		// down arrow
		if(posTop2 > window.innerHeight )
			alert('You are about to leave the road');
		else
			document.getElementById('char-2').style.top = (posTop2+25)+"px";
    }
    else if (e.keyCode == '37') {
	   // left arrow
		if(posLeft < 0)
			alert('You are about to leave the road');
	   else
	   	document.getElementById('char').style.left = (posLeft-25)+"px";
    }
    else if (e.keyCode == '65') {
        // left arrow
         if(posLeft2 < 0)
             alert('You are about to leave the road');
        else
            document.getElementById('char-2').style.left = (posLeft2-25)+"px";
     }
    else if (e.keyCode == '39') {
	   // right arrow
	   if(posLeft > window.innerWidth)
			alert('You are about to leave the road');
		else
			document.getElementById('char').style.left = (posLeft+25)+"px";
    }
    
    else if (e.keyCode == '68') {
        // right arrow
        if(posLeft2 > window.innerWidth)
             alert('You are about to leave the road');
         else
             document.getElementById('char-2').style.left = (posLeft2+25)+"px";
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

    if(p1==true)
    {
        document.querySelector('.content').style.display = 'block';
        document.querySelector('.content').style.backgroundPosition='fixed';
        document.querySelector('.content').style.zIndex='2';
        document.querySelector('.final-score').innerHTML=time;
        document.querySelector('.won').innerHTML="<p>Player 1 Won!<p>"

    }
    
    if(p2==true)
    {
        document.querySelector('.content').style.display = 'block';
        document.querySelector('.content').style.backgroundPosition='fixed';
        document.querySelector('.content').style.zIndex='2';
        document.querySelector('.final-score').innerHTML=time;
        document.querySelector('.won').innerHTML="<p>Player 2 Won!<p>"
    }
}

// Collision Detection

setInterval(() => {
	
	var playerpos=document.getElementById('char').getBoundingClientRect();
    var car=document.querySelectorAll('.car');
    var playerpos2=document.getElementById('char-2').getBoundingClientRect();
	
	car.forEach((car)=>{

		var carpos=car.getBoundingClientRect()

		if(
			(carpos.x <= playerpos.x + playerpos.width)&&
			(carpos.x + carpos.width >= playerpos.x)&&
			(carpos.y <= playerpos.y + playerpos.height)&&
			(carpos.y + carpos.height >= playerpos.y)
			)
			{
				game = false; gameOver2();
            }
            
            if(
                (carpos.x <= playerpos2.x + playerpos2.width)&&
                (carpos.x + carpos.width >= playerpos2.x)&&
                (carpos.y <= playerpos2.y + playerpos2.height)&&
                (carpos.y + carpos.height >= playerpos2.y)
                )
                {
                    game=false;gameOver();

                }
	})


	
}, 250);
// Game Over

function gameOver() {

    
	document.querySelector('.content-f').style.display = 'block';
	document.querySelector('.content-f').style.backgroundPosition='fixed';
	document.querySelector('.content-f').style.zIndex='2';
    document.querySelector('.final-score').innerHTML=time;
    document.querySelector('.text').innerHTML='<p>Player 1 Won<p/>'
  document.querySelector('.remark-f').innerHTML="<h4> Visit a doctor soon! </h4>";
    
}

function gameOver2() {
	document.querySelector('.content-f').style.display = 'block';
	document.querySelector('.content-f').style.backgroundPosition='fixed';
	document.querySelector('.content-f').style.zIndex='2';
    document.querySelector('.final-score').innerHTML= time;
    document.querySelector('.text').innerHTML='<p>Player 2 Won<p/>'
}