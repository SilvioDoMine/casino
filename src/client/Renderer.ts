import { WebGLRenderer, BoxGeometry, Mesh, MeshPhongMaterial } from "three"
import { Camera } from "./Camera"
import { Entity } from "./Entities/Entity";
import Scene from "./Scene";

class Renderer {
    camera: Camera;
    canvas: HTMLElement;
    antialias: boolean;
    THREE: WebGLRenderer;

    /**
     * Classe que toma conta de renderizar dados na tela.
     *
     * @param {string} canvasId 
     */
    constructor(camera: Camera, canvas: HTMLElement) {
        this.camera = camera;
        this.canvas = canvas;
        this.antialias = true;

        this.THREE = new WebGLRenderer({
            antialias: true,
            canvas: this.canvas
        });

        this.setSize(window.innerWidth, window.innerHeight)
    }

    setSize(sizeWidth: number, sizeHeight: number): void {
        this.THREE.setSize(sizeWidth, sizeHeight)
    }

    /**
     * Loop de renderização. Renderiza TODOS os objetos da cena passada por parâmetro.
     * 
     * @param {*} scene 
     * @param {*} time 
     */
    loopRender = (scene: Scene, time: number = 0) => {
        const timeInSeconds = time * 0.001;
        
        scene.entities.forEach((entity: Entity) => {
            entity.render(timeInSeconds)
        })

        this.THREE.render(scene.THREE, this.camera.THREE)
        
        requestAnimationFrame(this.loopRender.bind(scene, scene))
    }
}

export default Renderer