import { useFish } from './FishDataProvider.js'

const arrayOfTheFishObjects = useFish()

for (const currentFishObject of arrayOfTheFishObjects) {
  console.log(currentFishObject)   
}