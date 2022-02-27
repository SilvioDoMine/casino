import * as THREE from '/build/three.module.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('#game-canvas')

        const camera = new Camera()

        const scene = new THREE.Scene()
        const color = 0xFFFFFF
        const intensity = 1
        const light = new THREE.DirectionalLight(color, intensity)
        light.position.set(-1, 2, 4)
        scene.add(light)

        const renderer = new Renderer(camera, '#game-canvas')
        renderer.startRender(scene)
    }
}

export default Game