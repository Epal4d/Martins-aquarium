import { database } from "./aquariumData.js";

const tips = database.tips

export const tipList = () => {
    let tipListHTML = '<h1>Tips</h1><br><ul class="tips">'
        for (const tip of tips) {
            tipListHTML += `
                <li>
                Topic:${tip.topic}<br>
                    ${tip.text}
                </li>
            `
    }
    tipListHTML += '</ul>'
return tipListHTML
}