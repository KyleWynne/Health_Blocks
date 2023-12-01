
Blockly.Blocks['setup_nutritionix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set up Nutritionix API with credentials");
    //this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['setup_nutritionix'] = function(block) {
  var code =  '// This code was written using the node.js compiler\n' +
              '// To run this code, you must install node.js\n' +
              '// You must install the node-fetch package\n' +
              '// To install node-fetch, open a terminal window and run "npm install node-fetch"\n' +
              '// and run the command "node code.js"\n' +
              'var app_id = "d2676aeb";\n' +
              'var app_key = "71a81a0317f71223d497357fad94e222";\n'+
              '\n';
  return code;
};

Blockly.Blocks['search_foods'] = {
  init: function() {
    this.appendValueInput("query")
        .setCheck(null)
        .appendField("search for foods matching");
    //this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.JavaScript['search_foods'] = function(block) {
  var value_query = Blockly.JavaScript.valueToCode(block, 'query', Blockly.JavaScript.ORDER_NONE);
  Blockly.JavaScript['search_foods'] = function(block) {
    var value_query = Blockly.JavaScript.valueToCode(block, 'query', Blockly.JavaScript.ORDER_NONE);
    var generatedCode = 'const foodName = '+ value_query +'; // Replace with the food you want to search for \n' +
    'const apiUrl = `https://trackapi.nutritionix.com/v2/search/instant?query=${foodName}`; \n' +
    'var headers = { \n' +
    ' "x-app-id": app_id,\n' +
    ' "x-app-key": app_key,\n' +
    ' "x-remote-user-id": 0\n' +
    '}; \n' +
    'fetch(apiUrl, { headers })\n' +
    ' .then((response) => {\n' +
    '   if (response.status === 200) {\n' +
    '     return response.json();\n' +
    '   } else {\n' +
    '     throw new Error(`Error: HTTP response code ${response.status}`);\n' +
    '   }\n' +
    ' })\n' +
    ' .then((data) => {\n' +
    '   console.log(data);\n' +
    ' })\n' +
    ' .catch((error) => {\n' +
    '   console.error("Error:", error);\n' +
    ' });\n';
  
    return generatedCode;
  };
};

Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text input:")
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['text_input'] = function(block) {
  var text = block.getFieldValue('TEXT');
  var code = '"' + text + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['calorie_sum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("calorie sum");
    this.appendValueInput("NUM1")
        .setCheck("Number");
    this.appendValueInput("NUM2")
        .setCheck("Number")
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(310);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['calorie_sum'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_num1} + ${value_num2}`;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['get_integer'] = {
  /**
   * Block for numeric value.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField("num input: ")
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.JavaScript['get_integer'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.Blocks['print_calories'] = {
  init: function() {
    this.appendValueInput("CALORIES")
        .setCheck("Number")
        .appendField("print calories:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['print_calories'] = function(block) {
  var value_calories = Blockly.JavaScript.valueToCode(block, 'CALORIES', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.log("total calories: "+ '+value_calories+');\n';
  return code;
};

Blockly.Blocks['nlp_exercise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nlp exercise")
    this.appendValueInput("QUERY")
        .setCheck("String")
        .appendField("Query");
    this.appendDummyInput()
        .appendField("Gender")
        .appendField(new Blockly.FieldDropdown([["Male","MALE"], ["Female","FEMALE"]]), "GENDER");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField("Height (cm)");
    this.appendValueInput("WEIGHT")
        .setCheck("Number")
        .appendField("Weight (kg)");
    this.appendValueInput("AGE")
        .setCheck("Number")
        .appendField("Age");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(false, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['nlp_exercise'] = function(block) {
  var Query = Blockly.JavaScript.valueToCode(block, 'QUERY', Blockly.JavaScript.ORDER_ATOMIC);
  var Gender = block.getFieldValue('GENDER');
  var Height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var Weight = Blockly.JavaScript.valueToCode(block, 'WEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var Age = Blockly.JavaScript.valueToCode(block, 'AGE', Blockly.JavaScript.ORDER_ATOMIC);
  Blockly.JavaScript['nlp_exercise'] = function(block) {
  var code = '\n' +
  'var headers = { \n' +
  '  "x-app-id": app_id,\n'+
  '  "x-app-key": app_key,\n'+
  '  "x-remote-user-id": 0,\n'+
  '  "Content-type": "application/json"\n'+
  '}; \n'+
  '\n'+
  'const exercise_endpoint = "https://trackapi.nutritionix.com/v2/natural/exercise";\n'+
  'const exercise_input = '+Query+';\n'+
  '\n'+
  'const GENDER = "'+Gender+'";\n'+
  'const WEIGHT_KG = "'+Weight+'";\n'+
  'const HEIGHT = "'+Height+'";\n'+
  'const AGE = "'+Age+'";\n'+
  '\n'+
  'var parameters = {\n'+
  '  "query": exercise_input,\n'+
  '  "gender": GENDER,\n'+
  '  "weight_kg": WEIGHT_KG,\n'+
  '  "height_cm": HEIGHT,\n'+
  '  "age": AGE,\n'+
  '} \n'+
  '\n'+
  'fetch(exercise_endpoint, { \n'+
  '  method: "POST",\n'+
  '  headers: headers,\n'+
  '  body: JSON.stringify(parameters)\n'+
  '})\n'+
  '.then(response => response.json())\n'+
  '.then(data => console.log(data))\n'+
  '.catch(error => console.error("Error:", error));\n';
  return code;
  };
}

Blockly.Blocks['nlp_nutrition'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("nlp nutrition")
    this.appendValueInput("QUERY")
    .setCheck("String")
    .appendField("Query");
    this.setInputsInline(false);
    this.setOutput(false, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['nlp_nutrition'] = function(block) {
  var Query = Blockly.JavaScript.valueToCode(block, 'QUERY', Blockly.JavaScript.ORDER_ATOMIC);
  Blockly.JavaScript['nlp_nutrition'] = function(block) {
  var code = '\n' +
  'var headers = { \n' +
  '  "x-app-id": app_id,\n'+
  '  "x-app-key": app_key,\n'+
  '  "x-remote-user-id": 0,\n'+
  '  "Content-type": "application/json"\n'+
  '}; \n'+
  '\n'+
  'const nutritionix_endpoint = "https://trackapi.nutritionix.com/v2/natural/nutrients";\n'+
  'const nutritionix_input = '+Query+';\n'+
  '\n'+
  'var parameters = {\n'+
  '  "query": nutritionix_input,\n'+
  '} \n'+
  '\n'+
  'fetch(nutritionix_endpoint, { \n'+
  '  method: "POST",\n'+
  '  headers: headers,\n'+
  '  body: JSON.stringify(parameters)\n'+
  '})\n'+
  '.then(response => response.json())\n'+
  '.then(data => { return data; }) // Return the data instead of logging it'+
  '.catch(error => console.error("Error:", error));\n';
  return code;
  }
}

function exportCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  download('code.js', code);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}