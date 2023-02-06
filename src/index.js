
import PlayScene from './scenes/PlayScene';
import MenuScene from './scenes/MenuScene';
import PreloadScene from './scenes/PreloadScene';
import ScoreScene from './scenes/ScoreScene';
import PauseScene from './scenes/PauseScene';

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2 };

const Scenes = [PreloadScene,MenuScene,ScoreScene,PlayScene, PauseScene];

const initScenes = () => Scenes.map(Scene => new Scene(SHARED_CONFIG))

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',
    pixelArt: true,
    arcade: {
      //debug: true,
    }
  },
  parent: 'phaser-game',
  scene: initScenes()
}

new Phaser.Game(config);
