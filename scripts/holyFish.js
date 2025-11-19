import { database } from "./aquariumData.js"

const fish = database.fish
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const fishes of fish) {
        if (fishes.length % 3 === 0){
            holyFish += `<article class='fish'>
                <h1> Name ${fishes.name}</h1>
                <img src="${fishes.image}" alt="${fishes.name} poster" class= "fish__image">
                <div class="fish__list"> Official name: ${fishes.species} </div>

            </article>
            `
                
        }
    }

    return holyFish
}