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

    /**
     * Loop de renderização. Renderiza TODOS os objetos da cena passada por parâmetro.
     * 
     * @param {*} scene 
     * @param {*} time 
     */
    loopRender = (scene, time = 0) => {
        const timeInSeconds = time * 0.001;
        
        scene.entities.forEach((entity) => {
            entity.render(timeInSeconds)
        })

        this._threeRenderer.render(scene._threeScene, this.camera._threeCamera)
        
        requestAnimationFrame(this.loopRender.bind(scene, scene))
    }
}

export default Renderer