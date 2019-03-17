var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var displayColor=document.querySelector("#displayColor")
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var button=document.querySelector("button");
var easybutton=document.querySelector("#easybtn");
var hardbutton=document.querySelector("#hardbtn");
var numSquares=6;
button.addEventListener("click",function(){
	//generate new colors 
	colors=generateRandomColor(numSquares);

	//pick a new color from array 
	pickedColor=pickColor();
	//change color Display to add new color 
	displayColor.textContent=pickedColor;
	//change the colors of the squares 
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
	}
	//reset the background color of the h1 element 
	h1.style.background="steelblue";
	message.textContent="";
	this.textContent="New Colors"
});
displayColor.textContent=pickedColor;
for(var i=0;i<squares.length; i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		//grab the clicked color
		var clickedColor=this.style.background;

		//compare the clicked color with the set color
		if(clickedColor===pickedColor){
			messageDisplay.textContent="CORRECT!!!!";
			button.textContent="PlayAgain?";
			changeColor(pickedColor);
			h1.style.background=clickedColor;
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="TRY AGAIN!!!";
		}
	});
}
function changeColor(color){ 
	//loop through each square 
	for(var i=0;i<squares.length;i++){
	//change color of every square
	squares[i].style.background = color;
}
}
function pickColor(){ 
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	//make an array of colors 
	var arr=[]
	//push the array elements into the array
	for(var i=0;i<num;i++){
	arr.push(randomColor());
}
	//return array 
	return arr;
}
function randomColor(){
	//generates random shades of red from 0 to 256 
	var r=Math.floor(Math.random()*256);
	//generates random shades of blue from 0 to 256 
	var b=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + b+", " + g+")";
}
easybutton.addEventListener("click",function(){
	//to make the color of the button pressed as blue 
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});
hardbutton.addEventListener("click", function(){
	easybutton.classList.remove("selected");
	hardbutton.classList.add("selected");   
	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
});