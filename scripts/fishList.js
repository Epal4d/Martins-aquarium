import { database } from './aquariumData.js';

const fish = database.fish

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';
        for (const fishies of fish) {
            fishHTML += `
            <article class='fish'>
                <h1>Official name: ${fishies.species}</h1>
                <img src="${fishies.image}" alt="${fishies.name} poster" class= "fish__image">
                <div class="fish__list"> ${fishies.name} 
                    
                </div>

            </article>
        `
    }
    return fishHTML

        
}
