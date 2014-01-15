// Generated by CoffeeScript 1.3.3
(function() {
  var gameLoop, init, run;

  window.g = {
    input: {},
    canvases: [],
    layers: 1,
    SCALE: 30,
    now: null,
    lastFrame: null,
    div: null,
    top: null,
    left: null,
    height: null,
    world: null,
    worker: null
  };

  Array.prototype.contains = function(value) {
    if (this.indexOf(value) > -1) {
      return true;
    }
    return false;
  };

  Array.prototype.remove = function(value) {
    var index;
    index = this.indexOf(value);
    if (index > -1) {
      this.splice(index, 1);
      return true;
    }
    return false;
  };

  Array.prototype.last = function() {
    return this[this.length - 1];
  };

  Array.prototype.removeIndex = function(index) {
    return this.splice(index, 1);
  };

  window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
    return window.setTimeout(function() {
      return callback(new Date());
    }, 1000 / 60);
  });

  /*
  try
  	console
  catch e
  	console = {}
  	console.log = ->
  */


  /*
  setInterval ->
    $('#fps').html g.output
  , 1000
  */


  $(function() {
    return init();
  });

  init = function() {
    g.input = new InputHandler();
    g.div = document.getElementById('twinbeat');
    g.width = g.div.clientWidth;
    g.height = g.div.clientHeight;
    g.top = g.div.offsetTop;
    g.left = g.div.offsetLeft;
    g.gravity = 10.8;
    g.lateral = 4;
    g.entityDim = 30;
    g.swap = 200;
    g.reverse = 200;
    g.challenge = 25000;
    g.challengePrep = 3000;
    g.challengeRot = 2;
    g.fps = 0;
    g.now = Date.now();
    g.start = Date.now();
    g.end = 0;
    g.lastFrame = g.now;
    g.elapsed = 0;
    g.sixty = Date.now();
    g.output = 0;
    g.gameWorld = new GameWorld();
    g.cachedSprites = [];
    return gameLoop();
  };

  gameLoop = function() {
    g.now = Date.now();
    g.elapsed = g.now - g.lastFrame;
    g.lastFrame = g.now;
    run();
    return requestAnimationFrame(gameLoop);
  };

  run = function() {
    g.sFrac = g.elapsed / 1000;
    if (g.gameWorld.reset) {
      delete g.gameWorld;
      $('#twinbeat').html('');
      $('#uprTxt').html('');
      $('#midTxt').html('');
      $('#lwrTxt').html('');
      g.gameWorld = new GameWorld();
      g.gameWorld.startGame = false;
      g.gameWorld.start = g.now;
      g.gameWorld.themeMusic.play();
    }
    g.gameWorld.update();
    return g.gameWorld.draw();
  };

}).call(this);
