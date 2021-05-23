export function createEntity(name: string, components: {[name: string]: any}) {
    const entity = document.createElement(name)
    for(const [componentName, value] of Object.entries(components)) {
        entity.setAttribute(componentName, value)
    }
    return entity
}