class bullet{
	constructor(xSpd, ySpd){
		this.x = turPosX;
		this.y = turPosY;
		this.xSpd = 12*xSpd;
		this.ySpd = 12*ySpd;
	}
	
	display(){
		push()
		stroke('230, 255, 0');
		fill('red');
		ellipse(this.x, this.y, 10);
		
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	hitScan(){
		for (var i = 0; i < targetZombies.length; i++){
			var collideOrNot = collideCircleCircle(this.x, this.y, 10, targetZombies[i].myX(), targetZombies[i].myY(), targetZombies[i].myR())
			if (collideOrNot){
				impact.play();
				targetZombies.splice(i,1);
				score += 2;
				return true;
			}
		}
		return false;
	}

	killBoss(){
		for (var i = 0; i < bosses.length; i++){
			var hitBoss = collideCircleCircle(this.x, this.y, 10, bosses[i].myX(), bosses[i].myY(), bosses[i].myR())
			if (hitBoss){
				if (bosses[0].health == 1){
					score += 100
					youWin()
					return true
				}
				// impact.play();
				bosses[0].health -= 1
				score += 2;
				console.log(bosses[0].health)
				return true;
			}
		}
		return false;
	}
	
}