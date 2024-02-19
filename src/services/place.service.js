import axios from "axios";

// add env variable for API_URL in .env file
const API_URL = process.env.API_URL;

export default {
    // get one place
    getOnePlace(id) {
        return axios.get(API_URL + "places/" + id).then((res) => res.data);
    }
};