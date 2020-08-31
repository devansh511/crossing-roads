// Movement of vehicles

var r_vehicles = ['001-bulldozer', '003-truck', '004-truck', '008-fire truck', '022-truck', '020-tow truck', '016-mixer truck','010-garbage truck', '011-truck', '007-excavator' ];

var l_vehicles = ['002-truck', '005-crane', '006-crane truck', '009-forklift', '012-truck', '015-road roller', '017-jeep', 'car', 'jeep', 'school-bus', 'sport-car', 'station-wagon', 'tourism'];

 function moving() {
     var box = document.getElementById('buttons');
     box.style.backgroundImage = "url('./assets/png/" + r_vehicles[Math.floor(Math.random() * r_vehicles.length)] + ".png')";
     box.style.backgroundImage = "url('./assets/png/" + l_vehicles[Math.floor(Math.random() * l_vehicles.length)] + ".png')";
 }
 
 
 // Left to right Movement
 
setInterval(()=>{
 

    const car=document.querySelectorAll('.car1');

    

    car.forEach((car)=>{
    
    car.style.backgroundImage = "url('./assets/png/" + l_vehicles[0] + ".png')";
    var vpos=car.offsetLeft;
    
    var d=vpos+50;
    car.style.left= d+'px'
    if(d>window.innerWidth)
    {
      car.style.left=0+'px';
      
    }
  
  })
  },250)

  setInterval(()=>{
 

    const car2=document.querySelectorAll('.car2');

    

    car2.forEach((car)=>{
    
    car.style.backgroundImage = "url('./assets/png/" + l_vehicles[0] + ".png')";
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
    
    car.style.backgroundImage = "url('./assets/png/" + r_vehicles[0] + ".png')";
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
    
    car.style.backgroundImage = "url('./assets/png/" + r_vehicles[0] + ".png')";
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

function detectKey(e) {

    var posLeft = document.getElementById('char').offsetLeft;
	var posTop = document.getElementById('char').offsetTop;
	// var newLeft = document.getElementById('char').style.left;
	// var newTop = document.getElementById('char').style.top;

    e = e || window.event;
    if (e.keyCode == '38') {
		// up arrow
		if(posTop < 0)
		{
			alert('You are about to leave the road');
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
	time += 1;
	document.getElementById('seconds').innerHTML = time;
}, 1000);