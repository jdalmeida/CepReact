import axios from "axios";

const clima = axios.create({
    baseURL: "https://api.weatherapi.com/v1/forecast.json?key=101cc28a65e04cceb1c123057232203&q="
});

export default clima;