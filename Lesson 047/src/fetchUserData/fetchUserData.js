const { default: axios } = require("axios")

const fetchUserData = async () => {
    try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;   
    } catch (error) {
        return `something wrong`
    }
}

module.exports = fetchUserData;