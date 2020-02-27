/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Betty",
        Length: "2 ft",
        Species: "Longtooth Barracuda",
        Location: "Cumberland River",
        food: ["squid",]
    },
    {
        name: "Nemo",
        Length: "2 in",
        Species: "Clownfish",
        Location: "Great Barrier Reef",
        food: ["Algae", "Zooplankton", "Worm", "Crustacean"]

    },
    {
        name: "Dory",
        Length: "2 ft",
        Species: "Longtooth Barracuda",
        Location: "Cumberland River",
        food: ["Plankton",]

    }
]

export const useFish = () => {
    return fishCollection
}