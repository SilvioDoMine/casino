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

        this.cubes = [
            this.makeInstance(geometry, 0x44aa88, 0),
            this.makeInstance(geometry, 0x8844aa, -2),
            this.makeInstance(geometry, 0xaa8844, 2)
        ]

        this.renderer.render(this.scene, this.camera)

        const color = 0xFFFFFF
        const intensity = 1
        const light = new THREE.DirectionalLight(color, intensity)
        light.position.set(-1, 2, 4)
        this.scene.add(light)

        requestAnimationFrame(this.render)
    }

    render = (time) => {
        time *= 0.001
        
        this.cubes.forEach((cube, index) => {
            const speed = 1 + index * .1
            const rot = time * speed

            cube.rotation.x = rot
            cube.rotation.y = rot
        })

        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render)
    }

    makeInstance = (geometry, color, x) => {
        const material = new THREE.MeshPhongMaterial({color})
        const cube = new THREE.Mesh(geometry, material)
        this.scene.add(cube)

        cube.position.x = x

        return cube
    }
} export default Game