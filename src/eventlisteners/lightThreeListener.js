import { getLightStatus } from "../api/getLightStatus.js"
import { updateLightStatus } from "../api/updateLightStatus.js"

export async function lightThreeListener() {
    const btn = document.querySelector("#lightThree")

    btn.addEventListener("click", async () => {
        
        let lightStatus = await getLightStatus("lightThree")
        if (lightStatus.isOn) {
            await updateLightStatus("lightThree", false)

        }else {
            await updateLightStatus("lightThree", true)

        }
        location.reload()
    })
}