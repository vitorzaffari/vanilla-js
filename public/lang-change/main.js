let langData;

async function fetchData(){
    try{
        const response = await fetch('./data/data.json');
        const data = await response.json();
        return data
    } catch (error){
        console.log("Erro: ", error);
    }
}
//TODO======================================

const langOptions = document.querySelector(".lang-option-div.active");
const otherLangOptionsDiv = document.querySelector(".lang-options-container");
const link1abt = document.querySelector('.link1abt')
const link2prj = document.querySelector('.link2prj')
const link3gdm = document.querySelector('.link3gdm')
const link4itr = document.querySelector('.link4itr')
const aboutTitle = document.querySelector('.about-title')
const aboutSectionText = document.querySelector('.text')
const welcomeSectionText = document.querySelector('.welcome-text')
const welcomeTitle = document.querySelector('.welcome-title')


langOptions.addEventListener("click", () => {
  otherLangOptionsDiv.classList.toggle("is-active");
});

otherLangOptionsDiv.addEventListener("click", (e) => {
  otherLangOptionsDiv.classList.toggle("is-active");
  let selectedOption = e.target.closest("div.lang-option-div");
  let selectedOptionId = selectedOption.id;
  let currentLangId = langOptions.id
  
  selectedOption.remove();
  changeLanguage(selectedOptionId, currentLangId);
});




function changeLanguage(newLangId, currentId){
  
    (async () => {
        const langData = await fetchData();
        
        let newLangContent = langData[newLangId];
        let oldLangContent = langData[currentId]
        //HeaderLinks
        link1abt.textContent = newLangContent.header.link1;
        link2prj.textContent = newLangContent.header.link2;
        link3gdm.textContent = newLangContent.header.link3;
        link4itr.textContent = newLangContent.header.link4;
        //language box
        const langName = langOptions.querySelector('p')
        langOptions.id = newLangContent.langBox.name;
        langName.innerText = newLangContent.langBox.name
        const langFlag = langOptions.querySelector('img')
        langFlag.src = newLangContent.langBox.img
        //add the rmved lang as option
        const changedOption = document.createElement('div');
        changedOption.classList.add('lang-option-div');
        changedOption.classList.add('option');
        changedOption.id = currentId;
        changedOption.innerHTML = `<p>${oldLangContent.langBox.name}</p><img src=${oldLangContent.langBox.img} alt=${oldLangContent.langBox.name} class="img-format">`
        otherLangOptionsDiv.firstElementChild.appendChild(changedOption)
        //about section

        
        let decodedText = new Uint8Array(atob(newLangContent.about.desc).split('').map(char => char.charCodeAt(0)));
        let decodedString = new TextDecoder('utf-8').decode(decodedText);
        aboutSectionText.innerHTML = decodedString
        aboutTitle.innerText = newLangContent.about.title

        let decodedText2 = new Uint8Array(atob(newLangContent.title.desc).split('').map(char => char.charCodeAt(0)));
        let decodedString2 = new TextDecoder('utf-8').decode(decodedText2);
        
        welcomeSectionText.innerHTML = decodedString2
        welcomeTitle.innerHTML = newLangContent.title.title

    })()


}