// This code was written using the node.js compiler
// To run this code, you must install node.js
// You must install the node-fetch package
// To install node-fetch, open a terminal window and run "npm install node-fetch"
// and run the command "node code.js"
var app_id = "d2676aeb";
var app_key = "71a81a0317f71223d497357fad94e222";

const foodId = "52200004265"; // Replace with the food you want to search for
const apiUrl = `https://trackapi.nutritionix.com/v2/search/item/${foodId}`;

fetch(apiUrl, { 
  method: "GET", 
  headers: {
    "x-app-id": app_id,
    "x-app-key": app_key,
    "x-remote-user-id": 0,
    "Content-Type": "application/json"
  }
})
.then((response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`Error: HTTP response code ${response.status}`);
  }
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

