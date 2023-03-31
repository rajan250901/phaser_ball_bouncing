class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }
  preload() {

  }
  create(){
    g.number= 10;
    
    for(let i=0;i<g.number;i++)
    {
      g.circle =this.add.circle(Math.random() *config.width/2, 
      Math.random() * config.height/2,20,0xffffff)
      this.physics.add.existing(g.circle)
      g.circle.body.setVelocity(200)
      g.circle.body.setCollideWorldBounds(true)
      g.circle.body.bounce.set(1);
    }
  }
  update(){

  }
}

const g={}
const config={
  type:Phaser.AUTO,
  height:window.innerHeight,
  width:window.innerWidth,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y:0, x:0},
      debug:false
    }
  },
  scene:[GameScene]
}

const game=new Phaser.Game(config)
