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
		this.health = 100;
		
	}
	
	display(){
		push();
		noStroke();
		fill('red');
		ellipse(this.x, this.y, this.r);
		pop();
	}
	
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
	updateDirection(){
        this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
		this.targetDir.normalize();
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
	
		
}
