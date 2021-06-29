class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x , y, texture, frame, pointValue){
        super(scene, x, y, texture, frame, pointValue);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.status = true;

        if(texture == 'animuwuship'){
            this.anims.create({key:'uwushipAnim', frames: this.anims.generateFrameNumbers('animuwuship', {start:0, end:4, first:0}), frameRate: 10, repeat: -1});
        }
        else{
            this.anims.create({key:'uwushipAnim', frames: this.anims.generateFrameNumbers('animowoship', {start:0, end:7, first:0}), frameRate: 10, repeat: -1});
            this.moveSpeed *= 1.5;
        
        }
        

    }
    

    update(){
        if(this.status == true){
            this.anims.play('uwushipAnim', true);
            
        }
        else{
            this.alpha = 0;
        }

        this.x  -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }

    }

    reset(){
        this.x = game.config.width;
    }
}