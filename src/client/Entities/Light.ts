import { ColorRepresentation, DirectionalLight, Vector3 } from "three"
import { Entity } from "./Entity.js";

export class Light extends Entity {
    name: string;
    position: Vector3;
    color: ColorRepresentation;
    intensity: number;
    THREE: DirectionalLight;

    constructor(name: string, intensity: number) {
        super();

        this.name = name;
        this.intensity = intensity;
        this.position = new Vector3(-1, 2, 4);
        this.color = 0xFFFFFF;
        this.THREE = new DirectionalLight(this.color, this.intensity);
    }

    init() {
        this.THREE.position.set(
            this.position.x,
            this.position.y,
            this.position.z
        );
    }
 }
