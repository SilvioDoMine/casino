class Entity
{
    constructor({ name, intensity }) {
        this.properties = {}
        
        this.properties.name = name
        if (intensity) this.properties.intensity = intensity

        this.init()
    }

    init() {
    }

    render(time) {
    }
}

export default Entity
