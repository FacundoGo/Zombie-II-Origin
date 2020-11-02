class Obstacle{
	constructor(){
        this.side = int(random(4));
        this.x = 100;
        this.y = 100;
	}
	
	display(){
		push();
		noStroke();
		fill('orange');
		rect(this.x, this.y, 50, 50);
		pop();
	}
	
	update(){
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
