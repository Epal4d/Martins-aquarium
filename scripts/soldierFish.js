import { database } from "./aquariumData.js";

const fish = database.fish

export const soldierFish = () => {
   
    let soldierFish = "" 

    for (const fishes of fish) {
        if (fishes.length % 5 === 0) {
            soldierFish += `<article class='fish'>
                <h1>Name: ${fishes.name}</h1>
                <img src="${fishes.image}" alt="${fishes.name} poster" class= "fish__image">
                <div class="fish__list"> Official Name: ${fishes.species} </div>
            </article>
            `
        }
    }
    return soldierFish
}
