import { PerspectiveCamera, Vector3 } from "three"

export class Camera {
    fov: number;
    aspect: number;
    near: number;
    drawDistance: number;
    position: Vector3;
    THREE: PerspectiveCamera;

    /**
     * Inicia o objeto que controla a câmera do jogador.
     */
    constructor() {
        this.fov = 40;
        this.aspect = window.innerWidth / window.innerHeight;
        this.near = 0.1;
        this.drawDistance = 1000;

        this.THREE = new PerspectiveCamera(
            this.fov,
            this.aspect,
            this.near,
            this.drawDistance
        );

        this.position = new Vector3(0, 0, 0);

        this.init();
    }

    private init() {
        this.positionSet(
            new Vector3(0, 0, 25)
        );
    }

    positionSet(position: Vector3) {
        this.position = position;
        this.THREE.position.set(position.x, position.y, position.z);
    }
}