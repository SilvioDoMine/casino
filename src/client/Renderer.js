import { WebGLRenderer, BoxGeometry, Mesh, MeshPhongMaterial } from "/build/three.module.js"

class Renderer {
    /**
     * Classe que toma conta de renderizar dados na tela.
     *
     * @param {string} canvasId 
     */
    constructor(camera, canvasId) {
        this.camera = camera
        this._canvas = document.querySelector(canvasId)
        this._antialias = true

        this._threeRenderer = new WebGLRenderer({
            antialias: true,
            canvas: this._canvas
        })

        this.setSize(window.innerWidth, window.innerHeight)
    }

    setSize(sizeWidth, sizeHeight) {
        this._threeRenderer.setSize(sizeWidth, sizeHeight)
    }

    startRender(scene) {
        const geometry = new BoxGeometry(1, 1, 1)

        this.cubes = [
            scene.makeInstance(geometry, 0x44aa88, 0),
            scene.makeInstance(geometry, 0x8844aa, -2),
            scene.makeInstance(geometry, 0xaa8844, 2)
        ]

        requestAnimationFrame(this.loopRender.bind(scene, scene))
    }

    loopRender = (scene, time) => {
        time *= 0.001
        
        this.cubes.forEach((cube, index) => {
            const speed = 1 + index * .1
            const rot = time * speed

            cube.rotation.x = rot
            cube.rotation.y = rot
        })

        this._threeRenderer.render(scene._threeScene, this.camera._threeCamera)
        
        requestAnimationFrame(this.loopRender.bind(scene, scene))
    }
}

export default Renderer