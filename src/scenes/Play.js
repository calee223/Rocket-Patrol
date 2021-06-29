class Play extends Phaser.Scene{
    constructor(){
        super("playScene");

        
    }

    

    preload(){
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('newrocket', './assets/newRocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('uwuship', './assets/uwuShipStatic.png');
        //this.load.image('starfield', './assets/starfield.png');
        this.load.image('starfield', './assets/starfieldbackground.png');
        this.load.image('parallax', './assets/stars.png'); 
        this.load.image('uiUpdate', './assets/uiUpdate.png');
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.spritesheet('circleExplosion', './assets/circleExplosion.png', {frameWidth:96, frameHeight: 96, startFrame: 0, endFrame:9});
        this.load.spritesheet('yellowExplosion', './assets/yellowExplosion.png', {frameWidth:96, frameHeight: 96, startFrame: 0, endFrame:9});
        this.load.spritesheet('weirdExplosion', './assets/weirdExplosion.png', {frameWidth:96, frameHeight: 96, startFrame:0, endFrame:9});
        this.load.spritesheet('heartExplosion', './assets/heartExplosion.png', {frameWidth:96, frameHeight: 96, startFrame:0, endFrame:9});
        this.load.spritesheet('animuwuship', './assets/uwuship.png',{frameWidth: 63, frameHeight:32, startFrame: 0, endFrame:4});
        this.load.spritesheet('animowoship', './assets/owoShip.png',{frameWidth: 32, frameHeight:20, startFrame: 0, endFrame:7});
    }

    create(){

        //title
        this.add.text(20,20, "Rocket Patrol Play");

        //star background
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0,0);
        this.parallax = this.add.tileSprite(10, 0, 640, 480, 'parallax').setOrigin(0,0); // for parallax scrolling +10!
        
        
        
        //rocket thing
        this.p1Rocket = new Rocket(this, game.config.width /2, game.config.height - (borderUISize + borderPadding), 'newrocket').setOrigin(0.5, 0);

        //ships thing
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'animuwuship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*4, borderUISize*6, 'animuwuship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width + borderUISize*2, borderUISize*8, 'animuwuship', 0, 10).setOrigin(0,0);

        this.owoShip = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*5, 'animowoship', 0,100).setOrigin(0,0);

        // this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0,0);
        // this.ship02 = new Spaceship(this, game.config.width + borderUISize*4, borderUISize*5, 'spaceship', 0, 20).setOrigin(0,0);
        // this.ship03 = new Spaceship(this, game.config.width + borderUISize*2, borderUISize*6, 'spaceship', 0, 10).setOrigin(0,0);

        
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0,0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);


        // keyboard inputs
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //EXPLOSION ANIMATIONS
        this.anims.create({key: 'explode', frames: this.anims.generateFrameNumbers('explosion', {start:0, end: 9, first: 0}), frameRate: 30});
        this.anims.create({key: 'exploding2', frames: this.anims.generateFrameNumbers('circleExplosion',{start:0, end:9, first: 0}), frameRate:10});
        this.anims.create({key: 'yellowExploding', frames: this.anims.generateFrameNumbers('yellowExplosion',{start:0, end:9, first: 0}), frameRate:10});
        this.anims.create({key: 'weirdExploding', frames: this.anims.generateFrameNumbers('weirdExplosion',{start:0, end:9, first: 0}), frameRate:10});
        this.anims.create({key: 'heartExploding', frames: this.anims.generateFrameNumbers('heartExplosion',{start:0, end:9, first: 0}), frameRate:10});
        

        //score board
        this.p1Score = 0;

        //high score 
        this.p1HScore = 0; //subject to change? 

        //scoreboard
        let scoreConfig = {
            fontFamily: "Courier",
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: "#843605",
            align: "right",
            padding:{
                top: 5, bottom: 5
            },
            fixedWidth: 100
        }

        //high score config?

        let hscoreConfig = {
            fontFamily: "Courier",
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: "#843605",
            align: "right",
            padding:{
                top: 5, bottom: 5
            },
            fixedWidth: 100
        }
        
        this.scoreLeft = this.add.text(borderPadding + borderUISize, borderUISize+borderPadding*2, this.p1Score, scoreConfig);
        this.scoreRight = this.add.text(borderPadding+borderUISize * 15, borderUISize + borderPadding* 2, this.p1HScore, hscoreConfig);

        //game over
        this.gameOver = false;

        // clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () =>{
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER',
            scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or <- for Menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);

        //timer



    }


    

    update(){
        // check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            this.scene.start("playScene");
        }
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start("menuScene");
        }

        this.starfield.tilePositionX -= 4;
        this.parallax.tilePositionX -= 2;
        this.p1Rocket.update();
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
        this.owoShip.update();

        if(this.checkCollision(this.p1Rocket, this.ship03)){
            //console.log("kaboom ship 03")
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if(this.checkCollision(this.p1Rocket, this.ship02)){
            //console.log("kaboom ship 02")
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if(this.checkCollision(this.p1Rocket, this.ship01)){
            //console.log("kaboom ship 01")
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }
        if(this.checkCollision(this.p1Rocket, this.owoShip)){
            this.p1Rocket.reset();
            this.shipExplode(this.owoShip);
            this.sound.play('sfx_owoshiphit');
        }

        if(!this.gameOver){
            this.p1Rocket.update();
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
            this.owoShip.update();
        }

    }

    checkCollision(rocket, ship){
        if(rocket.x < ship.x + ship.width &&
            rocket.x + rocket.width > ship.x &&
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y){
                return true;
            }
            return false;
    }

    

    shipExplode(ship){

        
        ship.alpha = 0; // hide the ship
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0,0);

        this.randomNumber = Math.floor(Math.random()*5);
        //console.log(this.randomNumber);

        // 4 new animations for explosion and randomization! 
        //soon to be SFX
        if(this.randomNumber == 0){
            boom.anims.play('explode');
            this.sound.play('sfx_explosion');
        }
        else if(this.randomNumber == 1){
            boom.anims.play('exploding2');
            this.sound.play('sfx_circleExplosion');
        }
        else if(this.randomNumber == 2){
            boom.anims.play('yellowExploding');
            this.sound.play('sfx_yellowExplosion');
        }
        else if(this.randomNumber == 3){
            boom.anims.play('weirdExploding');
            this.sound.play('sfx_weirdExplosion');
        }
        else{
            boom.anims.play('heartExploding');
            this.sound.play('sfx_heartExplosion');
        }
        
        boom.on('animationcomplete', () =>{
            ship.reset();
            ship.alpha = 1;
            boom.destroy();
        });

        // add score and repaint score display
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        
        
    }

    

}