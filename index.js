const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);

fetchBreedDescription(args[0], (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});
