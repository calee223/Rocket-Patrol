//console.log("Rocket Patrol");

/*
Christopher Lee
Rocket Patrol Mods
June 29 2021
~12 Hours


1. 4 new SFX(10)
2. Create new artwork for all of the in-game assets(20) 
3. Create a new spaceship type(20)
4. Implemented Parallax (10) <-- I'm not sure if this is overwritten
5. Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
6. Finished Tutorial(20)
7. Random spaceship direction(5)
8. Implemented speed increase after 30 seconds(5)


sources:
- SFXR: http://drpetter.se/project_sfxr.html 
- Piskel: https://www.piskelapp.com/ 
- Phaser 3 Documentation: https://photonstorm.github.io/phaser3-docs/
- Bug fixing w/ student that previously took class


*/



let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}



let game = new Phaser.Game(config);


let borderUISize = game.config.height /15;
let borderPadding = borderUISize / 3;


//reserve keyboard vars

let keyF, keyR, keyLEFT, keyRIGHT;



