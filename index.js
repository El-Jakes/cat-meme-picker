import catsData from './catsData.js'

const getEmotionsArray = (cats) => {
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            console.log(emotion)
        }
    }
}

getEmotionsArray(catsData)