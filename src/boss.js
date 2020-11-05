class Boss{
	constructor(){
        this.x = width/2;
        this.y = 0
		this.targetX = turPosX;
		this.targetY = turPosY;
		this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
		this.targetDir.normalize();
		this.xSpd = this.targetDir.x*zombieSpawnMultiplier;
		this.ySpd = this.targetDir.y*zombieSpawnMultiplier;
		this.r = 100;
		this.health = 50;
		
	}
	

	display(){
		push();
		let a = atan2(turPosY - this.x, turPosX - this.y);
		translate(this.x, this.y);
		rotate(a-50)
		// console.log(a)
		image(bossImg, -50, -50, this.r, this.r)
		pop();
		// noStroke();
		// image(zombie1, this.x, this.y, this.r, this.r)
	}

	// display(){
	// 	push();
	// 	noStroke();
	// 	fill('red');
	// 	// image(bossImg, this.x, this.y, this.r, this.r)
	// 	// ellipse(this.x, this.y, this.r);
	// 	image(bossImg, this.x,this.y, this.r, this.r)
	// 	pop();
	// }
	
	update(){
		this.targetX = turPosX;
		this.targetY = turPosY;
		this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
		this.targetDir.normalize();
		this.xSpd = this.targetDir.x*zombieSpawnMultiplier;
		this.ySpd = this.targetDir.y*zombieSpawnMultiplier;
		this.x += this.xSpd;
        this.y += this.ySpd;	
        // this.x +=1
        // this.y +=1
	}

	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	myX(){
		return this.x;
	}
	
	myY(){
		return this.y;
	}
	
	myR(){
		return this.r;
	}
	
	healthBar(){
           fill('red')
            rect(10, 10, 10, this.health)
	}	
}
