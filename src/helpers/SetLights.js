import { getAllLights } from "../api/getAllLights.js"

export async function setLight() {

    const lightList = await getAllLights()
    lightList.forEach(element => {
        const lightBox = document.querySelector(`.${element.name}`)
        const lightBoxText = lightBox.querySelector("span")

        if (element.isOn) {
            lightBox.style.backgroundColor = "green"
            lightBoxText.innerText = "ON"

        }else {
            lightBox.style.backgroundColor = "gray"
            lightBoxText.innerText = "OFF"
        } 
    });
}

