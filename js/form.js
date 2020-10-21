class Form{
    constructor(){
        this.input=createInput("enter your name")
        this. button = createButton("submit")
        this. greeting=createElement("h3")
    }
hide(){
    this.button.hide()
    this.input.hide()
    this.greeting.hide()
}
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(displayWidth/2-50,20)
       
        this.input.position(displayWidth/2-40,displayHeight/2-80)
      
        this.button.position(displayWidth/2+30,displayHeight/2)
        
       this. button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player .name=this.input.value()
            playerCount+=1 
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("welcome "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
        
    }
}