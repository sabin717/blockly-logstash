


Blockly.JavaScript['elasticsearch'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block,
			'elastic_search_inputs');
	// TODO: Assemble JavaScript into code variable.
	var code = 'elasticsearch { \n' + statements_name + '\n }';
	return code;
};
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
