let butn = document.querySelector(".btn");
let cont = document.querySelector(".container");



setInterval(function() {
	var box = document.createElement("div");
	box.className = 'myBox';
	ranNumY = Math.floor(Math.random()*100);
	ranNumX = Math.floor(Math.random()*100);
	ranClrR = Math.floor(Math.random()*255);
	ranClrG = Math.floor(Math.random()*255);
	ranClrB = Math.floor(Math.random()*255);
	ranSize = Math.floor(Math.random()*100);

	box.style.top = ranNumX + "%";
	box.style.left = ranNumY + "%";
	box.style.height = ranSize + "px";
	box.style.width = ranSize + "px";
	box.style.background = "transparent";
	box.style.boxShadow = `inset 0 0 5px white`;

	// box.style.background = `rgb(${ranClrR},${ranClrG},${ranClrB})`;
	// box.style.boxShadow = `0 0 10px  rgb(${ranClrR},${ranClrG},${ranClrB})`;
	
	cont.appendChild(box);
	setTimeout(function(){
		box.style.opacity = "0"; 
	},200);
	},100);
	
