import { getLightStatus } from "../api/getLightStatus.js"
import { updateLightStatus } from "../api/updateLightStatus.js"
import { setLight } from "../helpers/SetLights.js"

export async function lightOneListener() {
    const btn = document.querySelector("#lightOne")

    btn.addEventListener("click", async () => {
        
        let lightStatus = await getLightStatus("lightOne")
        if (lightStatus.isOn) {
            await updateLightStatus("lightOne", false)

        }else {
            await updateLightStatus("lightOne", true)

        }
        location.reload()
    })
    
    setLight()
    
}