import {BoxGeometry, Mesh, MeshPhongMaterial } from "/build/three.module.js"
import Entity from "./Entity.js";

class Cube extends Entity {
    constructor() {
        super()

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

        this.properties = {
            name: "Lulz"
        }

        this.init()
    }

    init() {
        this.threeGeometry = new BoxGeometry(this.geometry.width, this.geometry.height, this.geometry.depth)
        let color = 0x8844aa
        this.threeMaterial = new MeshPhongMaterial({color})
        this.threeCube = new Mesh(this.threeGeometry, this.threeMaterial)
        this.threeCube.name = this.properties.name

        this.threeCube.position.x = this.position.x
    }

    render(time) {
        const speed = 1 + 1 * .1
        const rot = time * speed

        this.threeCube.rotation.x = rot
        this.threeCube.rotation.y = rot
    }
}

export default Cube