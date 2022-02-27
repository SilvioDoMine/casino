import * as THREE from '/build/three.module.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('#game-canvas')
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas})

        this.fov = 75
        this.aspect = 300 / 150
        this.near = 0.1
        this.far = 5
        this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far)

        this.camera.position.set(0, 0, 2)

        this.scene = new THREE.Scene()

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.render)
    }

    render = (time) => {
        time *= 0.001
        
        this.cube.rotation.x = time
        this.cube.rotation.y = time

        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render)
    }
} export default Game