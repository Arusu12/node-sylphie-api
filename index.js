const axios = require('axios');

module.exports = function ask(text) {
  return axios.post('https://sylphie-api.onrender.com/api', { text })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw new Error('An error occurred');
    });
};
