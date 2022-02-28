import {BoxGeometry, Mesh, MeshPhongMaterial } from "/build/three.module.js"
import Entity from "./Entity.js";

class Cube extends Entity {
    init() {
        this.geometry = {
            width: 1,
            height: 1,
            depth: 1,
        }

        this.position = {
            x: 1,
            y: 0,
            z: 0,
        }

        this.material = {
            color: 0x44aa88
        }

        const color = 0x8844aa
        const geometry = new BoxGeometry(this.geometry.width, this.geometry.height, this.geometry.depth)
        const material = new MeshPhongMaterial({color})
        this.threeEntity = new Mesh(geometry, material)
        this.threeEntity.position.x = -2
    }

    render(time) {
        const speed = 1 + 1 * .1
        const rot = time * speed

        this.threeEntity.rotation.x = rot
        this.threeEntity.rotation.y = rot
    }
}

export default Cube