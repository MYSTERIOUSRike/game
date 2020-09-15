class Player{
    constructor(){

    }

    getcount(){
        var playercountref=database.ref("playerCount") 
        playercountref.on("value",function (data){
            playerState=data.val();
        } )
    }
    
    updateCount(Count){
        database.ref('/').update({
            playerCount : Count
        })
    
    }

    update(name){
        var playerindex="player"+playerCount
        database.ref(playerindex).set({
            name:name
        })
    }
}