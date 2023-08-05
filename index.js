import { catsData } from "./catsData.js";

const emotionsRadios = document.querySelector("#emotion-radios");

emotionsRadios.addEventListener("change", (e) => {
    console.log(document.getElementById(e.target.id))
})

const getEmotionsArray = (cats) => {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
        if (!emotionsArray.includes(emotion)) {
            emotionsArray.push(emotion);
        } 
    }
  }
  return emotionsArray;
};

const renderEmotionRadios = (cats) => {
  let renderedEmotions = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    renderedEmotions += `
        <div class="radio">
        <input 
        type="radio" 
        id="${emotion}" 
        value="${emotion}"
        name="emotion-radios"
        >
        <label for="${emotion}">${emotion}</label>
        </div>
        `;
  }
  emotionsRadios.innerHTML = renderedEmotions;
};

renderEmotionRadios(catsData);
