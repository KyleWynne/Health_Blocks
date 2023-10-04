//create a blockly block that creates a video element with whammy
Blockly.Blocks['create_video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create video element with Whammy");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['create_video'] = function(block) {
  var code = 'var video = document.createElement("video");\n' +
             'var whammy = new Whammy.Video();\n';
  return code;
};

Blockly.Blocks['set_frame_duration'] = {
  init: function() {
    this.appendValueInput("duration")
        .setCheck(null)
        .appendField("set frame duration to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['set_frame_duration'] = function(block) {
  var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var frameDuration = ' + value_duration + ';\n';
  return code;
};

Blockly.Blocks['add_frame'] = {
  init: function() {
    this.appendValueInput("frame")
        .setCheck(null)
        .appendField("add frame");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['add_frame'] = function(block) {
  var value_frame = Blockly.JavaScript.valueToCode(block, 'frame', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'addFrame(' + value_frame + ');\n';
  return code;
};

//dropdown menu full of exercises
Blockly.Blocks['exercise_dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select exercise:")
        .appendField(new Blockly.FieldDropdown([["Push-ups", "pushups"], ["Sit-ups", "situps"], ["Squats", "squats"]]), "exercise");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['exercise_dropdown'] = function(block) {
  var dropdown_exercise = block.getFieldValue('exercise');
  var code = dropdown_exercise;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

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
  var code =  'var app_id = "d2676aeb";\n' +
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
  var value_query = Blockly.JavaScript.valueToCode(block, 'query', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'const foodName = '+ value_query +'; // Replace with the food you want to search for \n' +
  'const apiUrl = `https://trackapi.nutritionix.com/v2/search/instant?query=${foodName}`; \n' +
  'const headers = { \n' +
    '"x-app-id": app_id,\n' +
    '"x-app-key": app_key,\n' +
    '"x-remote-user-id": 0\n' +
  '}; \n' +
  'fetch(apiUrl, { headers })\n' +
    '.then((response) => {\n' +
      'if (response.status === 200) {\n' +
        'return response.json();\n' +
      '} else {\n' +
       ' throw new Error(`Error: HTTP response code ${response.status}`);\n' +
      '}\n'+
   '})\n'
    '.then((data) => {\n'+
      'console.log(data);\n'+
    '})'+'catch((error) => {\n'+
      'console.error("Error:", error);\n'+
    '});\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
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
  return [code, Blockly.JavaScript.ORDER_NONE];
};














Blockly.Blocks['exercise'] = {
  init: function() {
    this.appendValueInput("EXPR1")
        .setCheck(["var", "exp", "Number"])
        .appendField("exercise");
    this.appendValueInput("EXPR2")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['diet'] = {
  init: function() {
    this.appendValueInput("EXPR1")
        .setCheck(["var", "exp", "Number"])
        .appendField("diet");
    this.appendValueInput("EXPR2")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['text'] = {
  init: function() {
    this.appendValueInput("EXPR1")
        .setCheck(["var", "exp", "Number"])
        .appendField("text");
    this.appendValueInput("EXPR2")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};
Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("x"), "NAME");
    this.setOutput(true, "var");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript.forBlock['Exercise'] = function(block) {
  var var_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE);
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + var_name + ' => ' + expr_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['Diet'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + expr1_code + ')(' + expr2_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['Text'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + expr1_code + ')(' + expr2_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['var'] = function(block) {
  var var_name = block.getFieldValue('NAME');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var runButton = document.getElementById('runButton');
runButton.addEventListener('click', function() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    // Execute the generated JavaScript code
    try {
        eval(code);
    } catch (error) {
        console.error(error);
    }
});
