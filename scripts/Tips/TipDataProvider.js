const tipList = [
    {
        Tip: "Make sure tank has water"
    },
    {
        Tip: "Clean the poop out on a regular basis"

    },
    {
        Tip: "Make sure to feed them daily"
    }
]

export const useTip = () => {
    return tipList.slice()
}