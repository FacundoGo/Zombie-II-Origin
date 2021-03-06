function getMouseVector(){
	let mouseXalt = mouseX - turPosX;
	let mouseYalt = mouseY - turPosY;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	// console.log(mouseDir)
	return mouseDir;
}
	
function drawReticle(){
	noFill();
	strokeWeight(1.5);
	stroke(0, 100, 125, 125);
	ellipse(mouseX, mouseY, 20);
	stroke(80, 160, 200, 125);
	// line(mouseX-14, mouseY-14, mouseX+14, mouseY+14);
	// line(mouseX+14, mouseY-14, mouseX-14, mouseY+14);
	// stroke(80, 160, 200, 125);
	// line(turPosX, turPosY, mouseX, mouseY);
}

function gameOver(){
	push()

	mainTrack.pause();
	
	print("DED");
	noStroke();
	fill(20)
	rect(0,200,600,200)
	
	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("YOU DIED",300,300)
		
	textFont('Helvetica');
	textSize(18);
	fill(235);
	let scoreString = "score: " + score;
	text(scoreString, 300, 340);
	
	if (score > highScore) {
		highScore = score;
		// Cookies.remove('highscore');
		// Cookies.set('highscore', highScore);
	}
	
	let highScoreString = "highscore: " + highScore;
	text(highScoreString, 300, 360);
	


	let domHighscore = document.querySelector('#highscore');
	domHighscore.innerText = highScore;

	// Retry.show();
	// Retry.position(250, 380);
	// Retry.size(100,30);
	// Retry.style('background-color', '#202020');
	// Retry.style('color', '#FFFFFF');
	// Retry.mousePressed(reset);

	canvas.mousePressed(reset);
	pop();
	noLoop();
	
}

function reset(){
	// Retry.hide();
	
	bulletsFired = [];
	targetZombies = [];
	bosses = [];
	turPosX = 300;
	turPosY = 300;
	targetTimer = 0;
	zombieSpawnMultiplier = 1;
	zombieSizeMultiplier = 1;
	score = 0;
	level = 0;
	levelData.innerText = level;
	clear();
	game.setupGame();
	setup();
	loop();
}
function startGame(){
	// start.hide();
	level = 1;
	levelData.innerText = level
	loop();
}

function gameOver(){
	push()

	mainTrack.pause();
	bossTrack.pause();
	clear();
	// game.setupGame();
	// print("DED");
	noStroke();
	fill(20)
	rect(0,0,width,height)
	
	textFont('Creepster');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("GAME OVER",300,300)
		
	textFont('Creepster');
	textSize(18);
	fill(235);
	let scoreString = "score: " + score;
	text(scoreString, 300, 340);
	
	if (score > highScore) {
		highScore = score;
		// Cookies.remove('highscore');
		// Cookies.set('highscore', highScore);
	}
	
	let highScoreString = "highscore: " + highScore;
	text(highScoreString, 300, 360);
	


	let domHighscore = document.querySelector('#highscore');
	domHighscore.innerText = highScore;

	// Retry.show();
	// Retry.position(250, 380);
	// Retry.size(100,30);
	// Retry.style('background-color', '#202020');
	// Retry.style('color', '#FFFFFF');
	// Retry.mousePressed(reset);
	canvas.mousePressed(reset);
	pop();
	noLoop();
	
}


function youWin(){
	// clear();
	// push()
	
	mainTrack.pause();
	bossTrack.pause();
	clear();
	level = 0;
	alert('YOU SURVIVED')
	// game.setupGame();

	// print("WIN");
	// noStroke();
	// fill('gray')
	// rect(0,0,width,width)
	
	textFont('Creepster');
	textAlign(CENTER);
	textSize(50);
	fill('green');
	text("WINNER",300,200)
	text("YOU SURVIVED...ANOTHER DAY",300,300)
		
	textFont('Creepster');
	textSize(25);
	fill('black');
	let scoreString = "score: " + score;
	text(scoreString, 300, 340);
	
	if (score > highScore) {
		highScore = score;
		// Cookies.remove('highscore');
		// Cookies.set('highscore', highScore);
	}
	
	let highScoreString = "highscore: " + highScore;
	text(highScoreString, 300, 370);
	text('Click anywhere to restart', 300,390)
	print('does it get here?')

	let domHighscore = document.querySelector('#highscore');
	domHighscore.innerText = highScore;

	// Retry.show();
	// Retry.position(250, 380);
	// Retry.size(100,30);
	// Retry.style('background-color', '#202020');
	// Retry.style('color', '#FFFFFF');
	// Retry.mousePressed(reset);
	canvas.mousePressed(reset)
	// pop();
	noLoop();
	
}