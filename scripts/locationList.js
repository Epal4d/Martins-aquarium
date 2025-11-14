import { database } from "./aquariumData.js";

const locations = database.locations

export const locationList = () => {
    let locationListHTML = '<article class="locations"'
        for (const location of locations) {
            locationListHTML += `<section class="location">
                Name:${location.name}<br>
                Country: ${location.country}<br>
                Description: ${location.description}<br><br>   
            </section>
        `
            
    }
        locationListHTML += "</article>"
    return locationListHTML 
}