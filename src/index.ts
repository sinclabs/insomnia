import { createEntity } from "./aframe";
import { 
    getRandomArbitrary,
    getRandomInt 
} from "./utils";

function createRandomCylinders() {
    const numberOfCylinders = getRandomInt(50, 100)
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
                position: `${getRandomArbitrary(-40, 40)} ${getRandomArbitrary(-0.5, 0.5)} ${getRandomArbitrary(-40, 40)}`,
                radius: getRandomArbitrary(1, 1.5),
                height: getRandomArbitrary(30, 50),
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