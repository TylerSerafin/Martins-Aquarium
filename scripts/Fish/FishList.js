import { useFish } from "./FishDataProvider.js"
import Fish from './Fish.js'

// Import `useFish` from the data provider module

const contentTarget = document.querySelector(".fishList")

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const fishObjectArray = useFish()

    for (const fishObject of fishObjectArray) {

        const fishHtmlRepresentation = Fish(fishObject)

        contentTarget.innerHTML += fishHtmlRepresentation

    }
}

export default FishList