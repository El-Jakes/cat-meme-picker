import { catsData } from "./catsData.js";

const emotionsRadios = document.querySelector("#emotion-radios");


const hightCheckedOption = (e) => {
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
emotionsRadios.addEventListener("change", hightCheckedOption)

const getEmotionsArray = (cats) => {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
        emotionsArray.includes(emotion) ? '' : emotionsArray.push(emotion)
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
        <label for="${emotion}">${emotion}</label>
        <input 
        type="radio" 
        id="${emotion}" 
        value="${emotion}"
        name="emotion-radios"
        >
        </div>
        `;
  }
  emotionsRadios.innerHTML = renderedEmotions;
};

renderEmotionRadios(catsData);
