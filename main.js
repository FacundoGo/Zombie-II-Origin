let bulletsFired = [];
let targetZombies = [];
let bosses = [];
let	mainHero;
let turPosX = 300;
let turPosY = 300;
let targetTimer = 0;
let zombieSpawnMultiplier = 2;
let zombieSizeMultiplier = 2;
let score = 0;
let Retry;
let start;
let domScore = document.querySelector('#score');
let mainScreen;
const game = new Game();
let newBoss;

let img; // Initial backgroundimage
let level2; // Level background image

let shot; // Sound effect of the shot
let impact; // Sound effect of impact on a zombie
let zombieSounds; // Array of sounds made by the zombies
let mainTrack;
let bossTrack;

let levelData = document.querySelector('#level')
let level = 0;
let highScore = 0;


function preload() {
	// preload() runs once
	img = loadImage('/images/map.png');
	level2 = loadImage('/images/level2.png')
	soundFormats('mp3', 'ogg');

	//----------------------------------------GUN & IMPACT SOUNDS--------------------------------------
	shot = loadSound('/sounds/gun.mp3')
	impact = loadSound('/sounds/impact.mp3')
	
	//----------------------------------------BACKING TRACKS--------------------------------------
	mainTrack = loadSound('/sounds/background-music1.mp3')
	bossTrack = loadSound('/sounds/boss-fight.mp3')

	//---------------------------------------ZOMBIE SOUNDS--------------------------------------
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
	start = createButton('Click to start')
	start.mousePressed(startGame);
	start.hide();
	
	
	game.setupGame();


	// mainTrack.play();

}


function mousePressed(){
	let mouseVector = getMouseVector();
	// console.log(mouseVector) 
	oneBullet = new bullet(mouseVector.x, mouseVector.y);
	bulletsFired.push(oneBullet);
	shot.play();
}

function bossFight() {
	if (bossTrack.play() !== true){
		bossTrack.play();
	}
}

function draw() {
	game.drawGame();

//----------------------------------------LEVELS--------------------------------------



}



	
























