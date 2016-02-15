
Blockly.JavaScript['csv'] = function(block) {
	/*
	 * var value_columns = Blockly.JavaScript.valueToCode(block, 'columns',
	 * Blockly.JavaScript.ORDER_ATOMIC); var value_seperator =
	 * Blockly.JavaScript.valueToCode(block, 'seperator',
	 * Blockly.JavaScript.ORDER_ATOMIC);
	 */
	var value_columns = block.getFieldValue('columns');
	var value_seperator = block.getFieldValue('seperator');
	// TODO: Assemble JavaScript into code variable.
	var code = 'csv { \n columns =>' + value_columns + '\n separator =>' + '\"'
			+ value_seperator + '\"' + '\n }';
	return code;
};
Blockly.JavaScript['filter_base'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'filters');
	// TODO: Assemble JavaScript into code variable.
	var code = '\n filter { \n' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['remove_field'] = function(block) {
	var value_field_to_remove = Blockly.JavaScript.valueToCode(block,
			'field_to_remove', Blockly.JavaScript.ORDER_ATOMIC);

	var code = 'remove_field =>' + value_field_to_remove + '\n';
	return code;
};
Blockly.JavaScript['if_not'] = function(block) {
	var text_columnname = block.getFieldValue('columnName');
	var statements_if_input = Blockly.JavaScript.statementToCode(block,
			'if_input');
	// TODO: Assemble JavaScript into code variable.
	var code = 'if ! [ \"' + text_columnname + '" ] { \n' + statements_if_input
			+ '\n}';
	return code;
};
Blockly.JavaScript['drop'] = function(block) {
	var statements_drop = Blockly.JavaScript.statementToCode(block, 'drop');
	// TODO: Assemble JavaScript into code variable.
	var code = ' drop   {' + statements_drop + '\n }';
	return code;
};
Blockly.JavaScript['grok'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'grok');
	// TODO: Assemble JavaScript into code variable.
	var code = '\n grok { \n' + statements_name + '\n }';
	return code;
};