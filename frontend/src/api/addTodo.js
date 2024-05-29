const API_URL = `http://localhost:4000`

export const addTodo = async (todo) => {
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { text: todo }
    const response = await fetch(`${API_URL}/todos/create`, {
        // method type?
        method: 'POST',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    return json
}
