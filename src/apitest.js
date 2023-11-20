// This code was written using the node.js compiler
// To run this code, you must install node.js
// You must install the node-fetch package
// To install node-fetch, open a terminal window and run "npm install node-fetch"
// and run the command "node code.js"
import fetch from "node-fetch";
var app_id = "d2676aeb";
var app_key = "71a81a0317f71223d497357fad94e222";


var headers = {
  "x-app-id": app_id,
  "x-app-key": app_key,
  "x-remote-user-id": 0,
  "Content-type": "application/json"
};

const exercise_endpoint = "https://trackapi.nutritionix.com/v2/natural/exercise";
const exercise_input = "I ran 5 miles then did strength training for 30 minutes";

const GENDER = "MALE";
const WEIGHT_KG = "87.5";
const HEIGHT = "320";
const AGE = "22";

var parameters = {
  "query": exercise_input,
  "gender": GENDER,
  "weight_kg": WEIGHT_KG,
  "height_cm": HEIGHT,
  "age": AGE,
}

fetch(exercise_endpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(parameters)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

var headers = {
  "x-app-id": app_id,
  "x-app-key": app_key,
  "x-remote-user-id": 0,
  "Content-type": "application/json"
};

const nutritionix_endpoint = "https://trackapi.nutritionix.com/v2/natural/nutrients";
const nutritionix_input = "ate 3 eggs and toast for breakfast";

var parameters = {
  "query": nutritionix_input,
}

fetch(nutritionix_endpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(parameters)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));