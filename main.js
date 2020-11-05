let bulletsFired = [];
let targetZombies = [];
let bosses = [];
let	mainHero;
let turPosX = 300;
let turPosY = 300;
let targetTimer = 0;
let zombieSpawnMultiplier = 1;
let zombieSizeMultiplier = 1;
let score = 0;
let Retry;
let start;
let domScore = document.querySelector('#score');
let mainScreen;
const game = new Game();
let newBoss;
let canvas;


let mode = 'demo' // for internal use to know which type of game is set - for release, put in "survival mode"
let baseline = 10 // for demo only, for deployment change to 10 (also change health of boss to 50)
 
let hero; // image of the hero
let zombie1; // image of the zombie
let bossImg; // image of the boss

let img; // Initial backgroundimage
let level2img; // Level background image
let level3img;
let level4img;
let finalimg;

let shot; // Sound effect of the shot
let impact; // Sound effect of impact on a zombie
let zombieSounds; // Array of sounds made by the zombies
let mainTrack;
let bossTrack;

let levelData = document.querySelector('#level')
let level = 0;
let highScore = 0;
let bossThreshold = 4;


let gameType = document.querySelector('#mySelect').value;
console.log(gameType)
let d, g;

function preload() {
	// preload() runs once
	img = loadImage('/images/map.png');
	level2img = loadImage('/images/level2.png')
	level3img = loadImage('/images/level3.png');
	level4img = loadImage('/images/level4.png');
	finalimg = loadImage('/images/final.png');

	hero = loadImage('/images/mainHero.png')
	zombie1 = loadImage('/images/zombie-gif.png')
	bossImg = loadImage('/images/boss.png')


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
	canvas = createCanvas(600, 600);
	// canvas.mouseClicked(start);
	d = 10;
	g = 100;
	angleMode(DEGREES);
	mainHero = new Hero(300,300);
	// Retry = createButton('retry');
	// Retry.hide();
	
	// start = createButton('')
	canvas.mousePressed(startGame);
	// start.hide();
	angleMode(DEGREES)
	
	
	game.setupGame();


	mainTrack.play();

}


function mousePressed(){
	let mouseVector = getMouseVector();
	// console.log(mouseDir)

	oneBullet = new bullet(mouseVector.x, mouseVector.y);
	bulletsFired.push(oneBullet);
	shot.play();
}

function draw() {
	game.drawGame();

	}

	
























