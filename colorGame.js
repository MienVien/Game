var numSquares = 6;
var colors = [];
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var newColor = document.querySelector("#btn1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupModeButtons();
	setupSquares();
	reset();
	newColor.addEventListener("click", function() {
		reset();
	});
}

function setupModeButtons() {
	for (var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				changeColor();
			}
			else
			{
				messageDisplay.textContent = "Try again";
				this.style.background = "#232323";
			}
		});
	}
}

function reset() {
	btn1.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.background = "steelblue";
}

function changeColor() {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.background = pickedColor;
	}
	h1.style.background = pickedColor;
	btn1.textContent = "PLAY AGAIN?";
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i=0; i<num; i++)
		arr.push(randomColors());
	return arr;
}

function randomColors() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
