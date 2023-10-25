import { getLightStatus } from "../api/getLightStatus.js"
import { updateLightStatus } from "../api/updateLightStatus.js"

export async function lightTwoListener() {
    const btn = document.querySelector("#lightTwo")

    btn.addEventListener("click", async () => {
        
        let lightStatus = await getLightStatus("lightTwo")
        if (lightStatus.isOn) {
            await updateLightStatus("lightTwo", false)

        }else {
            await updateLightStatus("lightTwo", true)

        }
        location.reload()
    })
}