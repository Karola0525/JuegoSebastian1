class Game{
    constructor(){

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      play(){
        player = new Player();
        playerCount = player.getCount();
    
        database.ref("/").update({
        carsAtEnd: 0
        });

    fill ("purple")
    rect(50,160,30,30)
    fill ("blue")
    rect(windowWidth-80,160,30,30)
    fill ("yellow")
    rect(50,windowHeight-190,30,30)
    fill ("pink")
    rect(windowWidth-80,windowHeight-190,30,30)
    //image(generador1,windowWidth/2-25,windowHeight/2-25,100,100)

    drawSprites();
      }

      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        
      }

}