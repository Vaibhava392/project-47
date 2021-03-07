class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            player1 = createSprite(50,310,36,95)
            player1.addImage(image1)
            player1.visible = true;
            player2 = createSprite(350,310,36,95)
            player2.addImage(image2)
            player2.visible = true;
            players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name ,x-25,y+25);
                         
                     }
                    
                     text("player1" + score1, 100,200)
                     text("player2" + score2, 100,300)
                 
                 }
                
                
                 

                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.velocityY = -9 
                    player.update();
                }
                if (keyIsDown(SPACE) && player.index !== null) {
                    var laser = createSprite(player.x,player.y,20,5)
                    laserGroup.add(laser);
                    if (laser.x === player1.x){
                        laser.velocityX = 9;
                        laser.shapeColor = "red"
                        if(player2.isTouching(laserGroup)){
                            gameState = END;
                            player2.visible = false;
        }
                    }
                    if (laser.x === player2.x){
                        laser.velocityX = -9;
                        laser.shapeColor = "blue"
                        if(player1.isTouching(laserGroup)){
                            gameState = END;
                            player1.visible = false;
        }
                    }
                }
                 
                 if (player.index !== null) {
                 {
                        
                    
                }}
              
                

         
         
        
         

    }

    end(){
        textSize(50);
        text("end",200,200)
        text("press R to restart",10,40)
        if(keyDown("R")){
          play();
          player1.visible = true;
          player2.visible = true;
        }
    }
}