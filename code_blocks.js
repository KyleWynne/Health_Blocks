
Blockly.Blocks['setup_nutritionix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set up Nutritionix API with credentials");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
              'import fetch from "node-fetch";\n' +
              'var app_id = "d2676aeb";\n' +
              'var app_key = "71a81a0317f71223d497357fad94e222";\n';
  return code;
};

Blockly.Blocks['search_foods'] = {
  init: function() {
    this.appendValueInput("query")
        .setCheck(null)
        .appendField("search for foods matching");
    this.setOutput(true, null);
    this.setColour(230);
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
    'const headers = { \n' +
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
    ' });';
  
    return generatedCode;
  };
};

Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
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