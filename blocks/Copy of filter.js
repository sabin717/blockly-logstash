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
 *   http://www.apache.or<html>
<body>

<table>
	<tr><td>Text to Save:</td></tr>
	<tr>
		<td colspan="3">
			<textarea id="inputTextToSave" style="width:512px;height:256px"></textarea>
		</td>
	</tr>
	<tr>
		<td>Filename to Save As:</td>
		<td><input id="inputFileNameToSaveAs"></input></td>
		<td><button onclick="saveTextAsFile()">Save Text to File</button></td>
	</tr>
	<tr>
		<td>Select a File to Load:</td>
		<td><input type="file" id="fileToLoad"></td>
		<td><button onclick="loadFileAsText()">Load Selected File</button><td>
	</tr>
</table>

<script type='text/javascript'>

function saveTextAsFile()
{
	var textToWrite = document.getElementById("inputTextToSave").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}

</script>

</body>
</html>g/licenses/LICENSE-2.0
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
 */
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF
'use strict';

goog.provide('Blockly.Blocks.logic');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.logic.HUE = 210;

Blockly.Blocks['input1'] = {
	init : function() {
		this.appendDummyInput().appendField("input {");
		this.appendDummyInput().appendField("file {");
		this.appendValueInput("path").appendField("path").setCheck("String");
		this.appendValueInput("start").appendField("start").setCheck("String");
		this.appendValueInput("type").appendField("type").setCheck("String");
		this.appendDummyInput().appendField("}");
		this.appendDummyInput().appendField("}");
		this.setTooltip('');
		 this.setColour(120);
		this.setNextStatement(true, 'Mouse');
    
	}
};
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
Blockly.Blocks['output'] = {
	init : function() {
		this.appendDummyInput().appendField("output {");
		this.appendDummyInput().appendField("elasticsearch {");
		this.appendValueInput("action").appendField("action")
				.setCheck("String");
		this.appendValueInput("hosts").appendField("hosts").setCheck("String");
		this.appendValueInput("docId").appendField("document_id").setCheck(
				"String");
		this.appendValueInput("index").appendField("index").setCheck("String");
		this.appendDummyInput("doc_as_upsert").appendField("doc_as_upsert")
				.appendField(
						new Blockly.FieldDropdown([ [ "false", "false" ],
								[ "true", "true" ] ]), "doc_as_upsrt");
		this.appendDummyInput().appendField("}");
		this.appendDummyInput().appendField("}");
		this.setPreviousStatement(true);
		 this.setColour(150);
		 this.setMovable(false);
	}
};
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
Blockly.Blocks['output1'] = {
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
/*Blockly.Blocks['action'] = {
 init: function() {
 this.appendValueInput("action")
 .appendField("action");
 this.setPreviousStatement(true);
 this.setNextStatement(true);
 }
 };*/

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
Blockly.Blocks['path'] = {
		init : function() {
			this.appendDummyInput("path").appendField("path").appendField(new Blockly.FieldTextInput('enter path'), 'path');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		}
	};
Blockly.Blocks['type'] = {
		init : function() {
			this.appendDummyInput("type").appendField("type").appendField(new Blockly.FieldTextInput('enter document type'), 'type');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		}
	};
Blockly.Blocks['start_position'] = {
		init : function() {
			this.appendDummyInput("start_position").appendField("start_position")
					.appendField(
							new Blockly.FieldDropdown([ [ "End", "end" ],
									[ "Beginning", "beginning" ] ]), "start_position");
			this.setInputsInline(false);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		}
	};
Blockly.Blocks['since_db_path'] = {
		init : function() {
			this.appendDummyInput("since_db_path").appendField(new Blockly.FieldTextInput('since_db_path'), 'since_db_path');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
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