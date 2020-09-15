class Form {
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)
        var input=createInput("name")
        input.position(200,100)
        var button=createButton('play')
        button.position(250,200)
        var greeting=createElement('h3')
      

        button.mousePressed(function (){
            input.hide();
            button.hide();
            var Name=input.value();
            playerCount++

            player.update(Name)
            player.updateCount(playerCount)
            greeting.html("HELLO"+Name)
            greeting.position(130,160)
        })
    }

}


