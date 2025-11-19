import { database } from "./aquariumData.js";

const fish = database.fish

export const regularOleFish = () => {
    let unworthyFish = ""

    for (const fishes of fish) {
        if (fishes.length % 3 !== 0 || fishes.length % 5 !== 0 ){
            
            unworthyFish += `<article class='fish'>
                <h1>${fishes.name}</h1>
                <img src="${fishes.image}" alt="${fishes.name} poster" class= "fish__image">
                <div class="fish__list"> Official name: ${fishes.species} </div>
                </article>
            `
                     
        }
    }
    
    return unworthyFish
}