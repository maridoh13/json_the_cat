const request = require('request');
const args = process.argv.slice(2);

request(`http://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found.');
  } else if (response.statusCode === 404) {
    console.log('404 - page not found');
  } else {
    console.log(data[0].description);
  }
  
});

