import { Scene as ThreeScene } from "/build/three.module.js"

class Scene {
    constructor() {
        this._threeScene = new ThreeScene()
        this.entities = []
    }

    addEntity(newEntity) {
        let found = false

        this.entities.forEach((entity) => {
            if (entity.threeEntity.uuid == newEntity.threeEntity.uuid) {
                found = true
            }
        })

        if (! found) {
            this.entities.push(newEntity)
            this._threeScene.add(newEntity.threeEntity)
        }
    }

    removeEntity(EntityToRemove) {
        this.entities.forEach((entity, index) => {
            if (EntityToRemove.uuid == entity.uuid) {
                this._threeScene.remove(EntityToRemove.threeEntity)
                this.entities.splice(index, 1)
            }
        })
    }
}

export default Scene