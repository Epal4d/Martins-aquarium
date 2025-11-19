import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish } from './holyFish.js'
import { soldierFish } from './soldierFish.js'
import { regularOleFish } from './regularFish.js'
 
// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

//Store holyFish list
const holyFishHTML = mostHolyFish()

//store soldier Fish
const soldierHTML = soldierFish()

//store unholyFish 
const unholyFishHTML = regularOleFish()


// Render each HTML string to the correct DOM element

document.getElementById('fishList').innerHTML = `${holyFishHTML}${soldierHTML}${unholyFishHTML}`
document.getElementById('tipList').innerHTML = tipHTML
document.getElementById('locationList').innerHTML = locationHTML



