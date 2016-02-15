
Blockly.Blocks['filter_base'] = {
	init : function() {
		this.appendDummyInput().appendField("filter {");
		this.appendStatementInput("filters");
		this.appendDummyInput().appendField("}");
		// this.setPreviousStatement(true);
		this.setPreviousStatement(true);
		 this.setColour(100);
		this.setNextStatement(true);
		this.setMovable(false);
	}
};

Blockly.Blocks['csv'] = {
	init : function() {
		this.appendDummyInput().appendField("csv {");
		this.appendDummyInput("columns").appendField("columns").appendField(new Blockly.FieldTextInput(' '), 'columns');;
		this.appendDummyInput("seperator").appendField("seperator").appendField(new Blockly.FieldTextInput(' '), 'seperator');
		this.appendDummyInput().appendField("}");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		 this.setColour(100);
		 
	}
};
Blockly.Blocks['remove_field'] = {
	init : function() {
		this.appendDummyInput().appendField("remove_field");
		this.appendValueInput("field_to_remove").setCheck("Array");
		this.setTooltip('');
		this.setPreviousStatement(true);
		 this.setColour(100);
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
Blockly.Blocks['drop'] = {
		  init: function() {
		    this.appendDummyInput()
		        .appendField("drop { ");
		    this.appendStatementInput("drop");
		    this.appendDummyInput()
		        .appendField("}");
		    this.setPreviousStatement(true);
			this.setNextStatement(true);
		    this.setTooltip('');
		    
		  }
		};
Blockly.Blocks['grok'] = {
		init : function() {
			this.appendDummyInput().appendField("grok {");
			this.appendStatementInput("grok");
			this.appendDummyInput().appendField("}");
			this.setColour(120);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
		}
	};