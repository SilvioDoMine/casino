import { Scene as ThreeScene } from "three"
import { Entity } from "./Entities/Entity.js"

export class Scene {
    THREE: ThreeScene;
    entities: Entity[];

    constructor() {
        this.THREE = new ThreeScene()
        this.entities = []
    }

    addEntity(newEntity: Entity) {
        let found = false;

        this.entities.forEach((entity: Entity) => {
            if (entity.THREE.uuid == newEntity.THREE.uuid) {
                found = true;
            }
        });

        if (! found) {
            this.entities.push(newEntity);
            this.THREE.add(newEntity.THREE);
        }
    }

    removeEntity(EntityToRemove: Entity) {
        this.entities.forEach((entity: Entity, index: number) => {
            if (EntityToRemove.THREE.uuid == entity.THREE.uuid) {
                this.THREE.remove(EntityToRemove.THREE);
                this.entities.splice(index, 1);
            }
        });
    }
}

export default Scene