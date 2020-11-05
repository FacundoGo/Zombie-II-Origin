class Zombie{
	constructor(){
		this.side = int(random(4));
		switch (this.side)
		{
			case 0:
				this.x = 0;
				this.y = int(random(height));
				break;
			case 1:
				this.x = int(random(width));
				this.y = 0;
				break;
			case 2:
				this.x = width;
				this.y = int(random(height));
				break;
			case 3:
				this.x = int(random(width));
				this.y = height;
				break;
		}
		this.targetX = turPosX;
		this.targetY = turPosY;
		this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
		this.targetDir.normalize();
		this.xSpd = this.targetDir.x*zombieSpawnMultiplier;
		this.ySpd = this.targetDir.y*zombieSpawnMultiplier;
		this.r = 50;
		
	}
	
	display(){
		push();
		let a = atan2(turPosY - this.x, turPosX - this.y);

		translate(this.x, this.y)
		rotate(a)
		image(zombie1, -25, -25, 50,50)
		pop();
		// noStroke();
		// image(zombie1, this.x, this.y, this.r, this.r)
	}
	// display(){
	// 	push();
	// 	noStroke();
	// 	// image(zombie1, this.x, this.y, this.r, this.r)
	// 	fill('black');
	// 	ellipse(this.x, this.y, this.r);
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
