
Blockly.JavaScript['input_file'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'file');
	var text_type = block.getFieldValue('type');
	var text_path = block.getFieldValue('path');
	var start_position = block.getFieldValue('start_position');
	var since_db_path = block.getFieldValue('sincedb_path');
	// TODO: Assemble JavaScript into code variable.sincedb_path
	var code = '\n file { \n' + statements_name + 'type => ' + '\"' + text_type
			+ '\"' + ' \n path => ' + '\"' + text_path + '\"'
			+ ' \nstart_position => ' + '\"' + start_position + '\"'
			+ ' \n sincedb_path => ' + '\"' + since_db_path + '\"' + '\n }';

	return code;
};
Blockly.JavaScript['input_base'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'input');
	// TODO: Assemble JavaScript into code variable.
	var code = 'input { ' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['path'] = function(block) {
	var value_path = block.getFieldValue('path');
	// TODO: Assemble JavaScript into code variable.
	var code = 'path => ' + '\"' + value_path + '\"' + '\n';
	return code;
};
Blockly.JavaScript['since_db_path'] = function(block) {
	var value_since_db_path = block.getFieldValue('since_db_path');
	// TODO: Assemble JavaScript into code variable.
	var code = 'since_db_path => ' + '\"' + value_since_db_path + '\"' + '\n';
	return code;
};
Blockly.JavaScript['type'] = function(block) {
	var value_workers = block.getFieldValue('type');
	// TODO: Assemble JavaScript into code variable.
	var code = 'type => ' + '\"' + value_workers + '\"' + '\n';
	return code;
};
Blockly.JavaScript['start_position'] = function(block) {
	var dropdown_start_position = block.getFieldValue('start_position');
	// TODO: Assemble JavaScript into code variable.
	var code = 'start_position => ' + dropdown_start_position + '\n';
	return code;
};
