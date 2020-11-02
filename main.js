let bulletsFired = [];
let targetZombies = [];
let	mainHero;
let turPosX = 300;
let turPosY = 300;
let targetTimer = 0;
let zombieSpawnMultiplier = 2;
let zombieSizeMultiplier = 2;
let score = 0;
let Retry;
let domScore = document.querySelector('#score');
let img;
let shot;
let impact;
let level2;
let zombieSounds;
let levelData = document.querySelector('#level')
let level = 1;
let highScore = 0;


function preload() {
	// preload() runs once
	img = loadImage('/images/map.png');
	level2 = loadImage('/images/level2.png')
	soundFormats('mp3', 'ogg');
	shot = loadSound('/sounds/gun.mp3')
	impact = loadSound('/sounds/impact.mp3')
	// zombieScream = loadSound('/sounds/zombie.mp3')
	zombieSounds = [loadSound("/sounds/zombie1.mp3"),
		loadSound("/sounds/zombie2.mp3"),
		loadSound("/sounds/zombie3.mp3"),
		loadSound("/sounds/zombie4.mp3")
	  ]
  }

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	mainHero = new Hero(300,300);
	Retry = createButton('retry');
	Retry.hide();
	console.log(Retry)
	rock = new Obstacle();

}


function mousePressed(){
	let mouseVector = getMouseVector();
	// console.log(mouseVector) 
	oneBullet = new bullet(mouseVector.x, mouseVector.y);
	bulletsFired.push(oneBullet);
	shot.play();
}

function draw() {

//----------------------------------------LEVELS--------------------------------------

	if (score % 15 == 0 && score != 0){
		level ++
		levelData.innerText = level
		// console.log(score)
	}

//----------------------------------------BACKGROUND IMAGE AND TRACK--------------------------------------
	if (level == 1){
		background(img);
	} else if (level >= 2){
		background(level2)
	}

//----------------------------------------OBSTCLES--------------------------------------

rock.display();
if (mainHero.roadblock()){
	console.log('hit');
}

	
	drawReticle();
	
	//----------------------------------------ZOMBIE-SPAWN--------------------------------------
	targetTimer += 1;
	let spawnInterval = int(100 / zombieSpawnMultiplier);
	let randSound = Math.floor(Math.random()*zombieSounds.length)
	//print(spawnInterval)
	if (targetTimer % spawnInterval == 0){
		// let newZombie = new Zombie();
		// targetZombies.push(newZombie);
		// score += 5;
		// every certain amount of time, iterate through the sound library
		// if (targetTimer % 3 == 0) {
		// 	zombieSounds[randSound].play();
		// }
	}

	
	
	
	//----------------------------------------------BULLETS----------------------------------------
	for (var i = 0; i < bulletsFired.length; i++){
		bulletsFired[i].display();
		bulletsFired[i].update();
		if (bulletsFired[i].outOfBounds()){
      		bulletsFired.splice(i,1);
    	}
		else if (bulletsFired[i].hitScan()){
      		bulletsFired.splice(i,1);
    	}
	}
	
	
	//-------------------------------------------ZOMBIES----------------------------------------
	for (var i = 0; i < targetZombies.length; i++){
		targetZombies[i].display();
		targetZombies[i].update();
		if (targetZombies[i].outOfBounds()){
      		targetZombies.splice(i,1);
    	}
	}
	
	zombieSpawnMultiplier += 0.001;
	if (zombieSizeMultiplier < 5){
		zombieSizeMultiplier += 0.001;
	}
	
	//------------------------------------------HERO-AND-HERO-DED---------------------------------------a
	mainHero.display();
	mainHero.move();
	if (mainHero.hitScan()){
		gameOver();
	}

	
	//------------------------------------------TUTORIAL------------------------------------------------
	noStroke();
	if (targetTimer < 300){
		textAlign(LEFT);
		textFont('Helvetica');
		textSize(14);
		fill(235);
		text("arrow keys or wasd: move", 35, 35);
		text("mouse: aim", 35, 50);
		text("left click: fire", 35, 65);
	}
	fill(60);
	textAlign(CENTER);
	text("version 1.01 by facundoGo", 300, 580);

	domScore.innerText = score;
}



	
























