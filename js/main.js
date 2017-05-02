var game = new Phaser.Game(800, 600, 'Experimenting');
game.state.add('Load', Load);
game.state.start('Load');

var Load = {
    preload: function() {
    }
}