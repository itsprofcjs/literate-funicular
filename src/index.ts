import { Engine } from '@babylonjs/core/Engines/engine';

import { BoxScene } from './scene/Box.scene';

const canvasElement = document.getElementById('renderCanvas') as HTMLCanvasElement;

const engine = new Engine(canvasElement);

const scene = new BoxScene(engine, canvasElement);

engine.runRenderLoop(() => {
    scene.render();
});
