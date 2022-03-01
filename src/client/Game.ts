import { Camera } from './Camera.js';
import { Scene } from './Scene.js';
import { Light } from './Entities/Light.js';
import { Cube } from './Entities/Cube.js';
import Renderer from './Renderer.js';

class Game {
    canvas: HTMLElement;

    constructor () {
        const canvas = document.getElementById('game-canvas');

        if (! canvas) {
            throw new Error('Error finding the canvas!');
        }

        this.canvas = canvas;

        const camera: Camera = new Camera();
        const scene = new Scene()

        scene.addEntity(new Light('Luz Genérica', 1));
        scene.addEntity(new Cube('Cubo Genérico'));

        const renderer = new Renderer(camera, this.canvas);
        renderer.loopRender(scene);
    }
}

new Game()