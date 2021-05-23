function create(entityName: string, components: {[name: string]: any}) {
    const entity = document.createElement(entityName)
    for(const [componentName, value] of Object.entries(components)) {
        entity.setAttribute(componentName, value)
    }
    return entity
}

/*
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>
*/

const getRandomInt = (max: number) => Math.floor(Math.random() * max)
const getRandomFloat = (max: number) => Math.random() * max

function createRandomCylinders() {
    const numberOfCylinders = getRandomInt(100)
    const cylinders: Array<{
        name: "a-cylinder",
        components: {
            [name: string]: any
        }
    }> = []

    for(let i=0; i<100; i++) {
        cylinders.push({
            name: "a-cylinder",
            components: {
                position: `${getRandomFloat(40)} ${getRandomFloat(0.5)} ${getRandomFloat(30)}`,
                radius: getRandomFloat(1),
                height: getRandomFloat(50),
                color: "#FFC65D",
                shadow: true
            }
        })
    }

    return cylinders
}

(function main() {
    const elementsDetails = [
        {
            name: "a-box",
            components: {
                position: "-1 0.5 -3",
                rotation: "0 45 0",
                color: "#4CC3D9", 
                shadow: true
            }
        },
        {
            name: "a-sphere",
            components: {
                position: "0 1.25 -5",
                radius: "1.25",
                color: "#EF2D5E", 
                shadow: true
            }
        },
        {
            name: "a-cylinder",
            components: {
                position: "1 0.75 -3",
                radius: "0.5",
                height: "1.5",
                color: "#FFC65D", 
                shadow: true
            }
        },
        {
            name: "a-plane",
            components: {
                position: "0 0 -4",
                rotation: "-90 0 0",
                width: "4",
                height: "4",
                color: "#7BC8A4", 
                shadow: true
            }
        },
    ]

    const scene = document.getElementsByTagName('a-scene')[0]
    
    const elementsToAppend = createRandomCylinders().map(({ name, components }) => create(name, components))

    elementsToAppend.forEach(element => scene.appendChild(element))
})()