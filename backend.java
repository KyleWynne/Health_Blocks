
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox') // Optional toolbox
});

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
