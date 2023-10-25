export async function getLightStatus(lightName) {
    const URL = `http://127.0.0.1:5000/light/${lightName}`
    const header = {
        methods: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
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
        console.log("error fetching light status: ", error)
    }
}