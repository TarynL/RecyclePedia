const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("recyclePedia_user")

export const getMyRecyclables = () => {
    return fetch(`${remoteURL}/lists?userId=${currentUser}&_expand=recyclable`)
    .then (result => result.json())
};

export const addRecyclable = (recyclableObj) => {
    return fetch(`${remoteURL}/recyclables`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recyclableObj)
    })
    .then(response => response.json())
}

export const addToList = (listObj) => {
    return fetch(`${remoteURL}/lists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listObj)
    })
    .then(response => response.json())
}