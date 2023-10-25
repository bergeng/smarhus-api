export async function updateLightStatus(lightName, status) {
    const URL = `http://127.0.0.1:5000/light/${lightName}`
    const header = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isOn: status })
    }

    try {
        let response = await fetch(URL, header)
        if (response.ok) {
            let data = await response.json()
            return data;
        } else {
            let errorData = await response.json()
            throw new Error(errorData.error)
        }
    } catch(error) {
        console.log("error updating light status: ", error)
    }
}