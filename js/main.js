var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-area', {
    preload: preload,
    create: create,
    update: update
});

WORLDSIZE=2048;
SPRITESNUM=1;

var player = {
	"spriteid":"1",
	'coordx':'0',
	'coordy':'0'
}

function preload() {
   for(index = 0; index < SPRITESNUM+1; index++) 
	{
		game.load.spritesheet(index, "assets/graphics/characters/"+index+".png", 32, 32);
	}
}

function create() {
    game.world.setBounds(0, 0, WORLDSIZE, WORLDSIZE);
    player.sprite = game.add.sprite(coordtopixel(player.coordx), coordtopixel(player.coordy), player.spriteid);
	
	keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	keyDown.onDown.add(movePlayerDown, this);
	
	keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	keyUp.onDown.add(movePlayerUp, this);
	
	keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	keyRight.onDown.add(movePlayerRight, this);
	
	keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	keyLeft.onDown.add(movePlayerLeft, this);
}

function update() {
}

function movePlayerDown() {
	player.sprite.y+=32;
}

function movePlayerUp() {
	player.sprite.y-=32;
}

function movePlayerLeft() {
	player.sprite.x-=32;
}

function movePlayerRight() {
	player.sprite.x+=32;
}

function coordtopixel(coord) {
	return coord*32;
}