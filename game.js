
class Game {



    setupGame(){
        
        
        if (level == 0){
            fill(20)
            // rect(0,200,600,200)

            textFont('Creepster');
            textAlign(CENTER);
            textSize(50);
            fill('black');
            text("READY?",300,300)
            text("CLICK TO START",300,350)

            // start.show();
            textAlign(CENTER);
            textFont('Creepster');
            textSize(22);
            fill(235);
            text("Move with Arrow keys or wasd", 300, 400);
            text("Aim with mouse", 300, 425);
            text("Click to shoot", 300, 450);

            noLoop();
            

        } else if (level == 'FINAL'){
            // bossTrack.play();
            alert('Final BOSS')
        }
    }

    drawGame(){

        
        if (level == 0){
            fill('blue')
            rect(100, 100 ,100 ,100)
        } 
    
        else if (level == 'FINAL'){
            //--------------------------------------------------------------------------------------------
            //----------------------------------------------BOSS BATTLE DRAW---------------------------------------
            background(finalimg);

            // let spawnInterval = int(100 / zombieSpawnMultiplier);
            if (score == bossThreshold){
                let newBoss = new Boss();
                bosses.push(newBoss);
                console.log('new boss added')
                score ++
            }

            bosses[0].display();
            bosses[0].update();
            if (bosses[0].outOfBounds()){
                bosses[0].x = width/2
                bosses[0].y = 0
                
          }
            // console.log(bosses)
            drawReticle();
            //----------------------------------------------BULLETS----------------------------------------
            for (var i = 0; i < bulletsFired.length; i++){
                bulletsFired[i].display();
                bulletsFired[i].update();
                if (bulletsFired[i].outOfBounds()){
                      bulletsFired.splice(i,1);
                }
                else if (bulletsFired[i].killBoss()){
                      bulletsFired.splice(i,1);
                }
            }
            
            
        
            //------------------------------------------HERO-AND-HERO-DEATH---------------------------------------a
            mainHero.display();
            mainHero.move();
            if (mainHero.hitScan()){
                gameOver();
            }
        
            
            domScore.innerText = score;


            //---------------------------------------------------------------------------------------
        //----------------------------------------ALL OTHER LEVELS--------------------------------------

        } else {
            if (score >= bossThreshold){
                console.log('is this happening?')
                level = "FINAL"
                levelData.innerText = level
                // game.setupGame();
            } else if (score >= 40){
                console.log(level)
                level = 4
                levelData.innerText = level
            } else if (score >= 20){
                console.log(level)
                level = 3
                levelData.innerText = level
            } else if (score >= 4){
                console.log(level)
                level = 'FINAL';
                levelData.innerText = level
                game.setupGame();  
                // bossFight();
            }

            // for fast testing, the "game.setupGame(); function is accessed after level"
            // before deployment, assign the proper game levels and uncomment the final level gamesetup
        
 
        //----------------------------------------BACKGROUND IMAGE AND TRACK--------------------------------------
        switch(level){
            case 1:
                background(img);
                break;
            case 2:
                background(level2img);
                break;
            case 3:
                background(level3img);
                break;
            case 4:
                background(level4img);
                break;
        }	
        
        
        //----------------------------------------OBSTACLES--------------------------------------
        
        // rock.display();
        // if (mainHero.roadblock()){
        //     console.log('hit');
        // }
        
            
            drawReticle();
            
            //----------------------------------------ZOMBIE-SPAWN--------------------------------------
            targetTimer += 1;
            let spawnInterval = int(100 / zombieSpawnMultiplier);
            let randSound = Math.floor(Math.random()*zombieSounds.length)
            //print(spawnInterval)
            if (targetTimer % spawnInterval == 0){
                let newZombie = new Zombie();
                targetZombies.push(newZombie);
                // console.log(newZombie)
        
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
            // HERO ROTATION HERE 

            if (mainHero.hitScan()){
                console.log('touched')
                gameOver();
            }
        
            
            //------------------------------------------TUTORIAL------------------------------------------------

            fill(60);
            textAlign(CENTER);
            text("version 1.01 by facundoGo", 300, 580);
        
            domScore.innerText = score;
    
        }
    }
}
        
    
        

