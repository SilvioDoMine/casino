import { PerspectiveCamera } from "/build/three.module.js"

class Camera {
    /**
     * Inicia o objeto que controla a câmera do jogador.
     */
    constructor() {
        this._fov = 40
        this._aspect = window.innerWidth / window.innerHeight
        this._near = 0.1
        this._drawDistance = 1000

        this._threeCamera = new PerspectiveCamera(
            this.fov,
            this.aspect,
            this.near,
            this.drawDistance
        )
    }

    /**
     * O quão a lente da câmera deve ser aberta.
     * 
     * @returns {number}
     */
    get fov() {
        return this._fov
    }

    /**
     * Proporção de Aspect Ratio da tela/monitor.
     * 
     * @returns {number}
     */
    get aspect() {
        return this._aspect
    }

    /**
     * Distância em que a câmera deve recuar no eixo Z.
     * 
     * @returns {number}
     */
    get near() {
        return this._near
    }

    /**
     * Distância em que os objetos serão renderizados.
     * 
     * @returns {number}
     */
    get drawDistance() {
        return this._drawDistance
    }

    /**
     * Objecto de câmera do ThreeJS
     */
    get threeCamera() {
        return this._threeCamera
    }

    /**
     * Muda a posição da câmera
     *
     * @param {*} positionX 
     * @param {*} positionY 
     * @param {*} positionZ 
     */
    positionSet(positionX, positionY, positionZ) {
        this.threeCamera.position.set(positionX, positionY, positionZ)
    }
}

export default Camera