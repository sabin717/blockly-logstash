


Blockly.Blocks['elasticsearch'] = {
	init : function() {
		this.appendDummyInput().appendField("elasticsearch {");
		this.appendStatementInput("elastic_search_inputs");
		this.appendDummyInput().appendField("}");
		// this.setPreviousStatement(true);
		this.setPreviousStatement(true);
		 this.setColour(150);
		this.setNextStatement(true);
	}
};

Blockly.Blocks['action'] = {
	init : function() {
		this.appendDummyInput("action").appendField("action").appendField(
				new Blockly.FieldDropdown([ [ "index", "index" ],
						[ "delete", "delete" ], [ "create", "create" ],
						[ "update", "update" ] ]), "action");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		 this.setColour(150);
		this.setTooltip('');
	}
};
Blockly.Blocks['doc_as_upsert'] = {
	init : function() {
		this.appendDummyInput("doc_as_upsert").appendField("doc_as_upsert")
				.appendField(
						new Blockly.FieldDropdown([ [ "false", "false" ],
								[ "true", "true" ] ]), "doc_as_upsert");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		 this.setColour(150);
		this.setTooltip('');
	}
};
Blockly.Blocks['hosts'] = {
	init : function() {
		this.appendDummyInput("hosts").appendField("hosts").appendField(new Blockly.FieldTextInput(''), 'hosts');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip('hosts details');
		 this.setColour(150);
	}
};
Blockly.Blocks['document_id'] = {
		init : function() {
			this.appendDummyInput("document_id").appendField("document_id").appendField(new Blockly.FieldTextInput(''), 'document_id');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
			 this.setColour(150);
		}
	};
Blockly.Blocks['index'] = {
		init : function() {
			this.appendDummyInput("index").appendField("index").appendField(new Blockly.FieldTextInput(''), 'index');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			 this.setColour(150);
			this.setTooltip('');
		}
	};
Blockly.Blocks['workers'] = {
		init : function() {
			this.appendDummyInput("workers").appendField("workers").appendField(new Blockly.FieldTextInput(''), 'workers');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
			 this.setColour(150);
		}
	};
Blockly.Blocks['if_not'] = {
		  init: function() {
		    this.appendDummyInput()
		        .appendField("if !")
		        .appendField(new Blockly.FieldTextInput("columnName"), "columnName")
		        .appendField(" {");
		    this.appendStatementInput("if_input");
		    this.setPreviousStatement(true);
			this.setNextStatement(true);
		    this.appendDummyInput()
		        .appendField("}");
		    this.setTooltip('');
		    
		  }
};
Blockly.Blocks['std_out'] = {
		init : function() {
			this.appendDummyInput().appendField("stdout {");
			this.appendStatementInput("stdout");
			this.appendDummyInput().appendField("}");
			this.setColour(120);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
		}
	};
Blockly.Blocks['codec'] = {
		init : function() {
			this.appendDummyInput("codec").appendField("codec").appendField(
					new Blockly.FieldDropdown([ [ "json", "json" ],
							[ "rubydebug", "rubydebug" ] ]), "codec");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
			this.setColour(150);
		}
	};
