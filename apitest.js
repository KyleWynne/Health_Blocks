import fetch from 'node-fetch';

const appId = 'd2676aeb';
const appKey = '71a81a0317f71223d497357fad94e222';
const foodName = '("apple")'; // Replace with the food you want to search for

const apiUrl = `https://trackapi.nutritionix.com/v2/search/instant?query=${foodName}`;

const headers = {
  'x-app-id': appId,
  'x-app-key': appKey,
  'x-remote-user-id': 0
};

fetch(apiUrl, { headers })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Error: HTTP response code ${response.status}`);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
