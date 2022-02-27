import {Scene as ThreeScene, DirectionalLight, BoxGeometry, Mesh, MeshPhongMaterial } from "/build/three.module.js"

class Scene {
    constructor() {
        this._threeScene = new ThreeScene()
    }

    addLight = (color, intensity, position) => {
        const light = new DirectionalLight(color, intensity)
        light.position.set(position.x, position.y, position.z)

        this._threeScene.add(light)
    }

    makeInstance = (geometry, color, x) => {
        const material = new MeshPhongMaterial({color})
        const cube = new Mesh(geometry, material)
        this._threeScene.add(cube)

        cube.position.x = x

        return cube
    }
}

export default Scene