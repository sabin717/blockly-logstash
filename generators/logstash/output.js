
Blockly.JavaScript['output'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'output');
	var code = '\n output { \n' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['std_out'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'stdout');
	var code = '\n stdout { \n' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['codec'] = function(block) {
	var value_codec = block.getFieldValue('codec');
	var code = 'codec => \"' + value_codec + '\" ';
	return code;
};
