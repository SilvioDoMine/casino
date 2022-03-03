import { Camera } from './Camera';
import { Scene } from './Scene';
import { Light } from './Entities/Light';
import { Cube } from './Entities/Cube';
import Renderer from './Renderer';

export class Game {
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
