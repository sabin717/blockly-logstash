Blockly.Blocks['input_base'] = {
		init : function() {
			this.appendDummyInput().appendField("input {");
			this.appendStatementInput("input");
			this.appendDummyInput().appendField("}");
			// this.setPreviousStatement(true);
			 this.setColour(120);
			this.setNextStatement(true);
		}
	};
Blockly.Blocks['input_file'] = {
		init : function() {
			this.appendDummyInput().appendField("file {");
			this.appendDummyInput("type").appendField("type").appendField(new Blockly.FieldTextInput(''), 'type');
			this.appendDummyInput("path").appendField("path").appendField(new Blockly.FieldTextInput(''), 'path');
			this.appendDummyInput("start_position").appendField("start_position")
			.appendField(new Blockly.FieldDropdown([ [ "End", "end" ],[ "Beginning", "beginning" ] ]), "start_position");
			this.appendDummyInput("since_db_path").appendField("since_db_path").appendField(new Blockly.FieldTextInput(''), 'sincedb_path');
			this.appendDummyInput().appendField("}");
			this.setPreviousStatement(true);
			 this.setColour(120);
			this.setNextStatement(true);

		}
	};
