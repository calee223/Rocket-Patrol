class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
            init(){

            }
            preload(){
                this.load.audio('sfx_select', './assets/blip_select12.wav');
                this.load.audio('sfx_explosion', './assets/explosion38.wav');
                this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
                this.load.audio('sfx_circleExplosion', './assets/circleExplosion.wav');
                this.load.audio('sfx_heartExplosion', './assets/heartExplosion.wav');
                this.load.audio('sfx_weirdExplosion', './assets/weirdExplosion.wav');
                this.load.audio('sfx_yellowExplosion', './assets/yellowExplosion.wav');
                this.load.audio('sfx_owoshiphit', './assets/owoshipHit.wav');
                this.load.image('menuUpdate', './assets/newMenu.png');
                /*
                    Used 'sfxr' program to create the 4 new SFX http://drpetter.se/project_sfxr.html
                */
            }
            create(){
                //this.add.text(20,20, "Rocket Patrol Menu");
                //this.scene.start("playScene");

                //menu text
                let menuConfig = {
                    fontFamily: "Georgia",
                    fontSize: '25px',
                    color: "#FFFFFF",
                    align: "right",
                    padding:{
                        top: 5, bottom: 5
                    },
                    fixedWidth: 0
                }

                //show text
                this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'WELCOME TO ROCKET PATROL!', menuConfig).setOrigin(0.5);
                this.add.text(game.config.width/2, game.config.height/2, 'Use (<-)   (->) arrows to move and (F) to fire', menuConfig).setOrigin(0.5);
                menuConfig.backgroundColor = '#000000';
                menuConfig.color = '#FFFFFF';
                this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press (<-) for Novice or (->) for Expert', menuConfig).setOrigin(0.5);

                this.newMenu = this.add.tileSprite(0,0, 640, 480, 'menuUpdate').setOrigin(0,0);


                // define keys 
                keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                
            }

            update(){
                if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
                    //easy mode
                    game.settings = {
                        spaceshipSpeed: 2,
                        gameTimer: 10000
                    }
                    this.sound.play('sfx_select');
                    this.scene.start('playScene');
                }
                if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
                    //hard mode
                    game.settings = {
                        spaceshipSpeed: 4,
                        gameTimer: 7000
                    }
                    this.sound.play('sfx_select');
                    this.scene.start('playScene');
                }
            }
}