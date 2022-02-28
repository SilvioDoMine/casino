import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Scene from './Scene.js'
import Cube from './Entities/Cube.js'
import Light from './Entities/Light.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('#game-canvas')

        const camera = new Camera()

        const scene = new Scene()
        scene.addEntity(new Light())
        scene.addEntity(new Cube())

        const renderer = new Renderer(camera, '#game-canvas')
        renderer.loopRender(scene)
    }
}

export default Game