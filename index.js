const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);

fetchBreedDescription(args[0], (error, description) => {
  if (error) {
    return ('Error message:', error);
  } else {
    return description;
  }
});
