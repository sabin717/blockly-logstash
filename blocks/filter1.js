/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */Blockly.Msg.CONTROLS_IF_IF_TITLE_IF
'use strict';

goog.provide('Blockly.Blocks.logic');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.logic.HUE = 210;


Blockly.Blocks['filter'] = {
  /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(301);
    this.appendDummyInput()
        .appendField('input');
    this.appendDummyInput()
    .appendField('{');
    this.appendDummyInput()
    .appendField('filter');
    this.appendDummyInput()
    .appendField('{');
    this.appendDummyInput()
    .appendField('PATH => ');
    this.setNextStatement(true);
    this.setTooltip('Filter Block');
    this.setOutput(true, 'String');
    this.setOutput(true, 'Number');
    this.contextMenu = false;
  }
};

Blockly.Blocks['input_block'] = {
		 
		  init: function() {
			  var di = this.appendDummyInput() ;   
		    di.appendField("input{");
		    this.appendDummyInput("file")
		        .appendTitle("file{");
		    this.appendValueInput("documenttype")
		        .appendField(new Blockly.FieldTextInput("documenttype"), "").setCheck("String");
		    
		    this.appendValueInput("paths")
		        .appendField(new Blockly.FieldTextInput("path"), "ddd");
		    this.appendValueInput("start_position")
		        .appendField(new Blockly.FieldTextInput("start"), "");
		    this.appendDummyInput()
	        .appendTitle("}");
		    this.appendDummyInput()
	        .appendTitle("}");
	        this.setEditable(false);
		    this.setInputsInline(false);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
};


Blockly.Blocks['close_block'] = {
		  init: function() {
			  this.appendDummyInput("input")
		        .appendTitle("input {");
		    this.appendStatementInput("NAME");
		    this.appendDummyInput("close_bracket")
	        .appendTitle("}"); 
		    this.setInputsInline(false);
		    this.setNextStatement(true,'filter');
		    this.setTooltip('');
		  }
		};
Blockly.Blocks['filter_block'] = {
		  init: function() {
			  this.appendDummyInput("input")
		        .appendTitle("filter {");
		    this.appendStatementInput("NAME");
		    this.appendDummyInput("filter")
	        .appendTitle("}"); 
		    this.setInputsInline(false);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};
Blockly.Blocks['output_block'] = {
		  init: function() {
			  this.appendDummyInput("output")
		        .appendTitle("output {");
		    this.appendStatementInput("NAME");
		    this.appendDummyInput("output")
	        .appendTitle("}"); 
		    this.setInputsInline(false);
		    this.setPreviousStatement(true);
		    this.setTooltip('');
		  }
		};
Blockly.Blocks['elastic_search'] = {
		  init: function() {
			  this.appendDummyInput("elastic_search")
		        .appendTitle("elasticsearch {");
		    this.appendStatementInput("NAME");
		    this.appendDummyInput("output")
	        .appendTitle("}"); 
		    this.setInputsInline(false);
		    this.setPreviousStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['action'] = {
		  init: function() {
		    this.appendValueInput("action")
	        .appendField(new Blockly.FieldTextInput("action"), "");
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('action');
		  }
		};
Blockly.Blocks['columns'] = {
		  init: function() {
		    this.appendValueInput("columns")
	        .appendField(new Blockly.FieldTextInput("columns"), "");
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('columns');
		  }
		};
Blockly.Blocks['seperator'] = {
		  init: function() {
		    this.appendValueInput("seperator")
	        .appendField(new Blockly.FieldTextInput("seperator"), "").appendField(new Blockly.FieldDropdown([["=", "="], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");;
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('seperator');
		  }
		};
Blockly.Blocks['hosts'] = {
		  init: function() {
			  
		    this.appendValueInput("hosts")
	        .appendField(new Blockly.FieldTextInput("hosts"), "");
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('hosts');
		  }
		};
Blockly.Blocks['document_id'] = {
		  init: function() {
			  
		    this.appendValueInput("document_id")
	        .appendField(new Blockly.FieldTextInput("document_id"), "");
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('document_id');
		  }
		};
Blockly.Blocks['mutate_block'] = {
		  init: function() {
			  this.appendDummyInput("mutate")
		        .appendTitle("mutate {");
		    this.appendStatementInput("mutate");
		    this.appendDummyInput("output")
	        .appendTitle("}"); 
		    this.setInputsInline(false);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};
Blockly.Blocks['index'] = {
		  init: function() {
			  
		    this.appendValueInput("index")
	        .appendField(new Blockly.FieldTextInput("index"), "");
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('index');
		  }
		};
Blockly.Blocks['csv_block'] = {
		  init: function() {
			  this.appendDummyInput("csv")
		        .appendTitle("csv {");
		    this.appendStatementInput("csv");
		    this.appendDummyInput("csv")
	        .appendTitle("}"); 
		    this.setInputsInline(false);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['input'] = {
		  init: function() {
		    this.appendStatementInput("input_starting")
		    .appendField(new Blockly.FieldTextInput("input {"), "input_start")
		        .setCheck("String");
		    this.appendValueInput("doctype")
		     .appendField(new Blockly.FieldTextInput("doctype =>"), "doctype")
		        .setCheck("String");
		    this.appendValueInput("start")
		     .appendField(new Blockly.FieldTextInput("start =>"), "start")
		        .setCheck("String");
		    this.appendValueInput("path")
		     .appendField(new Blockly.FieldTextInput("path =>"), "path")
		        .setCheck("String");
		    this.appendStatementInput("input_closing")
		    .appendField(new Blockly.FieldTextInput("}"), "input_close")
		        .setCheck("String");
		    this.setNextStatement(true);
		    this.setTooltip('');
		    this.setHelpUrl('http://www.example.com/');
		  }
		};
Blockly.Blocks['file'] = {
		  init: function() {
			  this.setPreviousStatement(true);
		    this.appendStatementInput("file")
		        .appendField(new Blockly.FieldTextInput("file {"), "file_start")
		    this.appendValueInput("doctype")
		     .appendField(new Blockly.FieldTextInput("doctype =>"), "doctype")
		      .appendField("doctype")
		        .setCheck("String");
		    this.appendValueInput("start")
		     .appendField("start")
		        .setCheck("String");
		    this.appendValueInput("path")
		     .appendField("path")
		        .setCheck("String");
	        this.setEditable(false);
	        this.setInputsInline(true);
		    this.setTooltip('');
		  }
};