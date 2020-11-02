let move = 3;
class Hero{
	constructor(){
	}
	
	display(){
		push()
		stroke(230, 255, 0);
		fill('blue');
		ellipse(turPosX, turPosY, 30);
		pop();
	}
	
	move(){
			if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && turPosX > 5) {
				turPosX -= move;
				// newZombie.up date();
	  		}
  			if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && turPosX < width-5) {
    			turPosX += move;
  			}
  			if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && turPosY > 5) {
    			turPosY -= move;
  			}
  			if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && turPosY < height-5) {
    			turPosY += move;
			  }
			targetZombies.forEach(function(zombie){
				zombie.update()
			})
		}
	
	hitScan(){
		for (var i = 0; i < targetZombies.length; i++){
			let collideOrNot = collideCircleCircle(turPosX, turPosY, 30, targetZombies[i].myX(), targetZombies[i].myY(), targetZombies[i].myR())
			if (collideOrNot){
				return true;
			}
		}
		return false;
	}
	roadblock(){
		let hitRock = collideRectCircle(rock.x, rock.y, 60, 60, turPosX, turPosY, 30)
		if (hitRock){
			move = (move + 5) *-1
		} else {
			move = 5;
		}
	}
}