'use strict'

import { DirectionalLight } from "/build/three.module.js"
import Entity from "./Entity.js";

class Light extends Entity {
    constructor() {
        super()

        this.geometry = {
            width: 1,
            height: 1,
            depth: 1,
        }

        this.position = {
            x: -1,
            y: 2,
            z: 4,
        }

        this.material = {
            color: 0xFFFFFF
        }

        this.properties = {
            name: "Luz ordinária",
            intensity: 1
        }

        this.init()
    }

    init() {
        this.threeEntity = new DirectionalLight(this.material.color, this.properties.intensity)
        this.threeEntity.position.set(this.position.x, this.position.y, this.position.z)
    }
 }

export default Light