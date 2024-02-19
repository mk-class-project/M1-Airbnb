import axios from "axios";

// add env variable for API_URL in .env file
const API_URL = process.env.API_URL;

export default {
    registerIneBooking(body) {
        return axios.post(API_URL + "booking", body, {
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => res.data);
    },

    getOneBooking(id) {
        return axios.get(API_URL + "booking/" + id).then((res) => res.data);
    },

};