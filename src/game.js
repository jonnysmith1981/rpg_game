const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    parent: "game-container", // ID of the DOM element to add the canvas to
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    game.load.tilemap('grassland', './assets/tileset_grassland.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image();

  }
  
  function create() {
    // Runs once, after all assets in preload are loaded
  }
  
  function update(time, delta) {
    // Runs once per frame for the duration of the scene
  }

  // Sources
  // https://gamedevacademy.org/how-to-create-a-turn-based-rpg-game-in-phaser-3-part-1/
  // https://gamedevacademy.org/how-to-create-a-turn-based-rpg-game-in-phaser-3-part-2/
  // https://phaser.io/examples/v2/loader/load-tilemap-json
  // https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6