var h = window.innerHeight;
var w = window.innerWidth;

var game = new Phaser.Game(w, h, Phaser.Canvas,'null',false,true);


 



var TextScreen = {
    


    
//инициализация параметров игры
init: function() {
    this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);
    this.game.stateTransition.configure({
  duration: Phaser.Timer.SECOND * 0.8,
  ease: Phaser.Easing.Exponential.InOut,
  properties: {
    alpha: 0,
    scale: {
      x: 1.4,
      y: 1.4
    }
  }
});
},

//загрузка игровых ресурсов до запуска игры
preload: function() {  
this.load.image('background', 'images/game.png');
},

//исполняется один раз после того, как все ресурсы будут загружены
create: function() {
    
$( ".intro" ).hide(500);
    
var content = ["4DF+llAKrGSL18Lj80Re17J     TGAdrif5T1aKCHl8AX   sUljxlqjPkyDHrtdtdEqc8BJ6NVOzrRup",
               "ncmcT0BxtkZdZMiBnX7k9hA     zT8BeCo2ZXfkTB9xZj   Z88kxnqy5iFAvMJ7hoEVm72wVN63Q7c2o+",               
               "tN50rhc7VoDdViFIJlYwE8O     ACPRzGgxyz37zUgzvR   zuu9fYDIrUC3FipUriw+OUiFK8ACDx+",
               "nCSH8U98hDZFmtUUlCbFWYd     Y0s5WotVFrVwFLZvKC  HA4hGcUUwyva/kuwLmjR/xsLQRjrzx1x8Ns6P",
               "SUyy8MYdx2V9fcUesxi5LewG    azRMecJf+S2bWaGjt   O7afk7krPVwcdCfcK92WtTdC7WZL38M5Iz0GGKi",
               "",
               "2NE6LJisrj5BxD69thjnfbhn    JE+mlOqV9icehG5cP   BHr44UNNDwqaCvFQyCih5PXQG5n4zoUFql970pJ",
               "S5F9JP9Qp5unVJwkNag6NK/E    uybP3Hhfcrj1PAb1w   f1JT0F8IlN6UlqWgbhrctbXqlZINeoOC/565R5SFx",
               "dJ3i2XZoqWhJrZvxZTl2TOE     nLVQiFiT4pOsmtI5x1  PERVkg2ddIWyaijJULWBnjOGzWvVWNyyY8nm7Eslr",
               "",
               "P2Jc0c4eto8I8Mdl3pq1kJ3     fqSpncThGyja969zQU      aQkSvqgGjesuETn5/ZNeQGTguTajNJp0WVitqCCoISb",
               "pN/TFfIh5xSHuR8MIctV+Rw     7naBv4K0evZMxGB/sR      8NV1fwEXce5GIh1M1fTi9ND/iKLjnEiUlXwzbrZH",
               "LJXjxu4xIZVixTqEfOelXKv     DMXVICfI982zE1oI1f      wPz+otet5z6mE9HU/CT52oathI95sG7yDc8wDRr",
               "CfrQCfydr0YOxUoLuxKDHMU     gzSm5zjbs4YLA6jCKh      Ik4bgQJCyGfH6XkgywCrciPV/em0I1F2qEMJmE7a",
               "c6evrMVlbKHb/GeuNsWgKd1     zPNtlylC1Ns+h1JpRN      ApzcjEbbly9jINCxSy397ehfOG5+uxJ+Gx53u+xr",
               "",
               "GDGmPD5Pka30a1URPA24WA0     aAi990JOwrvgJlkM2Q      Gx6WHTayM19d+p74KG1c3xNq20q9ddxMnOpBB/u3",
               "W48rFaFK1ZVpT5z2RxjbR8l     3PosQmlKOlECYwDPZh      C7ylft8xpsRtKcCgoYlhtb7ZYnysqzbqKWnQtksCI",
               "iIO81/21ROGkZvnYuH+cvuk     ofB/XEek4klS+9thjn      fbhnJE+mlOqV9icehG5c9thjnfbhnJE+mlOqV9icehG5c"
               ];

var line = [];

var wordIndex = 0;
var second = 0;
var lineIndex = 0;

var lineDelay = 0;
var wordDelay = 20;
    firstText = game.add.text(game.world.centerX, game.world.centerY, 'Загрузка проекта [An/.bis]..', { font: "50px Proun", fill: "#ffffff" });   
    firstText.anchor.setTo(0.5,0.5);
    game.time.events.add(Phaser.Timer.SECOND * 4, fadeText, this);
    
    function fade(e){
        game.add.tween(e).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    }
    
    function show(e){
        game.add.tween(e).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
    }
    
    function fadeText(){
        game.add.tween(firstText).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true);
        text = game.add.text(game.world.centerX, game.world.centerY, '...', { font: "10px Proun", fill: "#ffffff" });
        text.anchor.setTo(0.5,0.5);
        nextLine(text);
    }
    
    function step2(){
    firstText.text = 'Распаковываем блоки...';
    game.add.tween(text).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true);
    game.add.tween(firstText).to( { alpha: 1 }, 400, Phaser.Easing.Linear.None, true);
    game.time.events.add(Phaser.Timer.SECOND * 3, pafos, this);
    
    
    
   
    }
    
    
    
    function pafos(){
     var tween1 = game.add.tween(firstText).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true);
    tween1.onComplete.add(doSomething, this);
        function doSomething(){
            firstText.fontSize = 25;
            firstText.boundsAlignH= "center";
            firstText.text = 'Блоки повреждены.';
            var tween2 = game.add.tween(firstText).to( { alpha: 1 }, 400, Phaser.Easing.Linear.None, true);
            game.time.events.add(Phaser.Timer.SECOND * 3, corrupted, this);
           
            
            
        }     
    }
    
  
                
                function corrupted(){
                    var tween = game.add.tween(firstText).to( { alpha: 0 }, 400, Phaser.Easing.Linear.None, true);
                    tween.onComplete.add(action,this);function action () {
                        firstText.text = 'Блоки повреждены.\n Необходимо восстановление первичных [HISTORY] блоков.';
                        firstText.fontSize = 20;
                        firstText.align= "center";
                        tween = game.add.tween(firstText).to({alpha:1},400,Phaser.Easing.Linear.None,true);                        
                    }
                    
                }
            
    
    
    function toGameState(){
    alert('Переход на состояние GameState');
    
    background = this.game.add.sprite(0, 0, 'background');  
    background.x = 0;
    background.y = 0;
    background.height = game.height;
    background.width = game.width;
    //game.state.start('GameState');
        
    
    }
    
    function nextLine() {

    if (lineIndex === content.length)
    {
        //  We're finished
   
         step2();
        
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

}
    
    function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    
    }
}
},
    
//эта функция исполняется несколько раз в секунду
update: function() {   
   
} 

};



var InitScreen = {
    
//инициализация параметров игры
init: function() {
      this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);
    this.game.stateTransition.configure({
  duration: Phaser.Timer.SECOND * 0.8,
  ease: Phaser.Easing.Exponential.InOut,
  properties: {
    alpha: 0,
    scale: {
      x: 1.4,
      y: 1.4
    }
  }
});
},

//загрузка игровых ресурсов до запуска игры
preload: function() {  
this.load.image('background', 'images/back.jpg');
this.load.video('backvideo', 'video/video.mp4');
this.load.image('sprite','images/sprite.png');
},

//исполняется один раз после того, как все ресурсы будут загружены
create: function() {
 
   
this.game.scaleMode = Phaser.ScaleManager.EXACT_FIT; 
this.game.scale.pageAlignHorizontally = true;
this.game.scale.pageAlignVertically = true; 
this.game.scale.setShowAll();
game.scale.refresh();
    
video = game.add.video('backvideo');

//  See the docs for the full parameters
//  But it goes x, y, anchor x, anchor y, scale x, scale y
sprite = video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 0, 0);
sprite.height = window.innerHeight;
sprite.width = window.innerWidth;

//  true = loop
video.play(true);

    

    
game.input.onDown.add(gofull, this);
game.input.keyboard.onDownCallback = function(e) {this.game.stateTransition.to('MainMenu');}

function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
    
function gofull(){
h = window.innerHeight;
w = window.innerWidth;
sprite.width = w;
sprite.heighth = h;
launchIntoFullscreen(document.documentElement);
}

    
},

//эта функция исполняется несколько раз в секунду
update: function() {   
 
} 

};


var MainMenu = { 


init: function() {
     this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);
    this.game.stateTransition.configure({
  duration: Phaser.Timer.SECOND * 0.8,
  ease: Phaser.Easing.Exponential.InOut,
  properties: {
    alpha: 0,
    scale: {
      x: 1.4,
      y: 1.4
    }
  }
});
},
    
preload: function() {  
//this.load.image('background', 'images/back.jpg');
this.load.image('sprite','images/sprite.png');
this.load.image('button','images/button.jpg');
this.load.video('backvideo', 'video/video2.mp4');

},

//исполняется один раз после того, как все ресурсы будут загружены
create: function() {
game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 
// Properly centers game in windowed mode, but aligning
// horizontally makes it off-centered in fullscreen mode.
game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true; 
// This is necessary to scale before waiting for window changes.
game.scale.refresh();
video = game.add.video('backvideo');

//  See the docs for the full parameters
//  But it goes x, y, anchor x, anchor y, scale x, scale y
sprite = video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 0, 0);
sprite.height = window.innerHeight;
sprite.width = window.innerWidth;

//  true = loop
video.play(true);


function actionOnClick(){
    this.game.stateTransition.to('TextScreen');
}

    

button = game.add.button(game.world.centerX, game.world.centerY-80, 'button', actionOnClick, this, 2, 1, 0);
button.anchor.setTo(0.5,0.5);
button.alpha = 0.3;

game.input.keyboard.onDownCallback = function(e) {
this.game.stateTransition.to('InitScreen');
;}


    


},

//эта функция исполняется несколько раз в секунду
update: function() {   
   
} 

};




//добавляем состояние к объектам игры
game.state.add('TextScreen',TextScreen);
game.state.add('InitScreen', InitScreen);
game.state.add('MainMenu', MainMenu);

//запускаем состояние
game.state.start('InitScreen');
