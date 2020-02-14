const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`The breed ${breedName} was not found.`, null);
    } else if (response.statusCode === 404) {
      callback('404 - page not found', null);
    } else {
      callback(null, data[0].description)
    }
    
  });
};


module.exports = { fetchBreedDescription };