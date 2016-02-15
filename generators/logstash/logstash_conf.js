

Blockly.JavaScript['input1'] = function(block) {
	var value_path = Blockly.JavaScript.valueToCode(block, 'path',
			Blockly.JavaScript.ORDER_ATOMIC);
	var value_start = Blockly.JavaScript.valueToCode(block, 'start',
			Blockly.JavaScript.ORDER_ATOMIC);
	var value_start = Blockly.JavaScript.valueToCode(block, 'type',
			Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'input { \n file {\n path=>' + value_path + '\n start =>'
			+ value_start + '\n } \n }';
	return code;
};
Blockly.JavaScript['output1'] = function(block) {
	var value_action = Blockly.JavaScript.valueToCode(block, 'action',
			Blockly.JavaScript.ORDER_ATOMIC);
	var value_hosts = Blockly.JavaScript.valueToCode(block, 'hosts',
			Blockly.JavaScript.ORDER_ATOMIC);
	var value_docid = Blockly.JavaScript.valueToCode(block, 'docId',
			Blockly.JavaScript.ORDER_ATOMIC);
	var value_index = Blockly.JavaScript.valueToCode(block, 'index',
			Blockly.JavaScript.ORDER_ATOMIC);
	// var value_doc_as_upsert = Blockly.JavaScript.valueToCode(block,
	// 'doc_as_upsert', Blockly.JavaScript.ORDER_ATOMIC);
	var value_doc_as_upsrt = block.getFieldValue('doc_as_upsrt');
	var code = 'output { \n elasticsearch {\n action=>' + value_action
			+ '\n hosts =>' + value_hosts + '\n doc_as_upsert => '
			+ value_doc_as_upsrt + ' \n }';
	return code;
};
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
Blockly.JavaScript['elasticsearch'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block,
			'elastic_search_inputs');
	// TODO: Assemble JavaScript into code variable.
	var code = 'elasticsearch { \n' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['output'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'output');
	// TODO: Assemble JavaScript into code variable.
	var code = '\n output { \n' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['remove_field'] = function(block) {
	var value_field_to_remove = Blockly.JavaScript.valueToCode(block,
			'field_to_remove', Blockly.JavaScript.ORDER_ATOMIC);

	var code = 'remove_field =>' + value_field_to_remove + '\n';
	return code;
};
/*
 * Blockly.JavaScript['action'] = function(block) { var value_name =
 * Blockly.JavaScript.valueToCode(block, 'NAME',
 * Blockly.JavaScript.ORDER_ATOMIC); // TODO: Assemble JavaScript into code
 * variable. var code = value_name; return code; };
 */
Blockly.JavaScript['doc_as_upsert'] = function(block) {
	var dropdown_doc_as_upsert = block.getFieldValue('doc_as_upsert');
	// TODO: Assemble JavaScript into code variable.
	var code = 'doc_as_upsert => ' + dropdown_doc_as_upsert + '\n';
	return code;
};
Blockly.JavaScript['action'] = function(block) {
	var dropdown_action = block.getFieldValue('action');
	// TODO: Assemble JavaScript into code variable.
	var code = 'action => \"' + dropdown_action + '\"\n';
	return code;
};
Blockly.JavaScript['hosts'] = function(block) {
	var value_hosts = block.getFieldValue('hosts');
	// TODO: Assemble JavaScript into code variable.
	var code = 'hosts => \"' + value_hosts + '\"\n';
	return code;
};
Blockly.JavaScript['document_id'] = function(block) {
	var value_document_id = block.getFieldValue('document_id');
	// TODO: Assemble JavaScript into code variable.
	var code = 'document_id => ' + value_document_id + '\n';
	return code;
};
Blockly.JavaScript['index'] = function(block) {
	var value_index = block.getFieldValue('index');
	var code = 'index => ' + '\"' + value_index + '\"' + '\n';
	return code;
};
Blockly.JavaScript['workers'] = function(block) {
	var value_workers = block.getFieldValue('workers');
	// TODO: Assemble JavaScript into code variable.
	var code = 'workers => \"' + value_workers + ' \" \n';
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
Blockly.JavaScript['std_out'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'stdout');
	// TODO: Assemble JavaScript into code variable.
	var code = '\n stdout { \n' + statements_name + '\n }';
	return code;
};
Blockly.JavaScript['codec'] = function(block) {
	var value_codec = block.getFieldValue('codec');
	// TODO: Assemble JavaScript into code variable.
	var code = 'codec => \"' + value_codec + '\" ';
	return code;
};
Blockly.JavaScript['grok'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'grok');
	// TODO: Assemble JavaScript into code variable.
	var code = '\n grok { \n' + statements_name + '\n }';
	return code;
};