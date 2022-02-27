import * as THREE from '/build/three.module.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Scene from './Scene.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('#game-canvas')

        const camera = new Camera()

        const scene = new Scene()
        scene.addLight(0xFFFFFF, 1, {x: -1, y: 2, z: 4})

        const renderer = new Renderer(camera, '#game-canvas')
        renderer.startRender(scene)
    }
}

export default Game