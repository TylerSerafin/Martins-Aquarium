import { useTip } from "./TipDataProvider.js"
import Tip from "./Tip.js"

const contentTarget = document.querySelector(".tipList")

const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const tipObjectArray = useTip()

    for (const tipObject of tipObjectArray) {

        // const tipHtmlRepresentation = Tip(tipObject)

        // contentTarget.innerHTML += tipHtmlRepresentation
        contentTarget.innerHTML += Tip(tipObject)

    }
}

export default TipList