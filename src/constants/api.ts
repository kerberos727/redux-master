export const API_BASE_URL = 'http://localhost:4000';
export const API_TOURNAMENTS_URL = `${API_BASE_URL}/tournaments`;
export const API_TOURNAMENTS_SEARCH_URL = `${API_BASE_URL}/tournaments`;

export const fetch_data = async (keyword: string) => {

    try {
        const response = await fetch(API_TOURNAMENTS_URL + '?q=' + keyword)
        const data = await response.json()
        return { success: true, data: data }
    } catch (error) {
        return { success: false, data: [] }
    }

}
export const add_data = async (name: string) => {
    try {
        const response = await fetch(API_TOURNAMENTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })

        const data = await response.json()
        return { success: true, data: data }

    } catch (error) {
        return { success: false }
    }
}
export const edit_data = async (name: string, id: string) => {
    try {
        const response = await fetch(API_TOURNAMENTS_URL + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })

        const data = await response.json()
        return { success: true, data: data }

    } catch (error) {
        return { success: false }
    }
}

export const delete_data = async (id: string) => {
    try {
        const response = await fetch(API_TOURNAMENTS_URL + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })

        return { success: true }

    } catch (error) {
        return { success: false }
    }
}