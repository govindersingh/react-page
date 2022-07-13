const axios = require("axios").default;

const url = "https://laravel-api.bytecodetechnologies.co.in/api";

export const getUsers = (id) => {
  axios
    .get(`${url}/users/${id}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
