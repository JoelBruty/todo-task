const API_URL = `http://localhost:4000`

export const getTodo = async (id) => {
    const response = await fetch(`${API_URL}/todos/item/${id}`, {
        // method type?
        method: 'GET',
        // content type?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // convert to json
    const json = await response.json()
    // return json
    return json
}