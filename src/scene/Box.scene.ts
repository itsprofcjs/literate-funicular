import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { ArcRotateCamera, HemisphericLight, MeshBuilder, Vector3 } from '@babylonjs/core';

export class BoxScene extends Scene {
    constructor(engine: Engine, public rootElement: HTMLCanvasElement) {
        super(engine);

        this.setCamera();
        this.setLight();
        this.createBox();
    }

    setCamera() {
        const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), this);

        camera.attachControl(this.rootElement);
    }

    setLight() {
        new HemisphericLight('light', new Vector3(0, 1, 0), this);
    }

    createBox() {
        MeshBuilder.CreateBox('box', {});
    }
}
