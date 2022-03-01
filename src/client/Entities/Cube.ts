import { BoxGeometry, ColorRepresentation, Mesh, MeshPhongMaterial, Vector3 } from "three"
import { Entity } from "./Entity.js";

export class Cube implements Entity {
    name: string;
    color: ColorRepresentation;
    position: Vector3;
    THREE: any;

    constructor(name: string) {
        this.name = name;
        this.color = 0x44aa88;
        this.position = new Vector3(-2, 0, 0);
        this.THREE = new Mesh(
            new BoxGeometry(1, 1, 1),
            new MeshPhongMaterial({color: this.color}),
        );
    }

    init(): void {
        this.updatePosition();
    }

    updatePosition(): void {
        this.THREE.position.x = this.position.x;
        this.THREE.position.y = this.position.y;
        this.THREE.position.z = this.position.z;
    }

    render(time: number): void {
        const speed = 1 + 1 * .1
        const rot = time * speed

        this.THREE.rotation.x = rot
        this.THREE.rotation.y = rot
    }
}
