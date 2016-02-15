
Blockly.Blocks['output'] = {
	init : function() {
		this.appendDummyInput().appendField("output {");
		this.appendStatementInput("output");
		this.appendDummyInput().appendField("}");
		// this.setPreviousStatement(true);
		this.setPreviousStatement(true);
		 this.setColour(150);
		 this.setMovable(false);
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
