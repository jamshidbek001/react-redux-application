export const setItem = (key,data) => {
    try {
        localStorage.setItem(key,data)
    } catch (error) {
        console.log("Error saving the data")
    }
}