import { createEntity } from "./aframe";
import { 
    getRandomFloat,
    getRandomInt 
} from "./utils";

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
                position: `${getRandomFloat(40)} ${getRandomFloat(0.5)} ${getRandomFloat(40)}`,
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
    const scene = document.getElementsByTagName('a-scene')[0]

    scene.setAttribute("background", "color: #3b3b3b")
    
    const elementsToAppend = createRandomCylinders().map(({ name, components }) => createEntity(name, components))

    elementsToAppend.forEach(element => scene.appendChild(element))
})()