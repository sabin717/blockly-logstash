
  var workspaceChanged = function() {
	  alert('workspaceChanged');
	  //showCode();
 }
  var onresize = function(e) {
	
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  };
  window.addEventListener('resize', onresize, false);
  onresize();

/* var workspace = Blockly.inject('blocklyDiv',
        {
         toolbox: document.getElementById('toolbox')});
var xml = Blockly.Xml.textToDom(xmlText);
Blockly.Xml.domToWorkspace(workspace, xml); */
  function showCode() {
	alert('showCode');
      // Ge''nerate JavaScript code and display it.
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      document.getElementById('codeArea').innerHTML=code;
      //var xml = Blockly.Xml.workspaceToDom(workspace); codeArea
    }   
    function saveConfig() {
    	var xml = Blockly.Xml.workspaceToDom(workspace);
    	var xml_text = Blockly.Xml.domToPrettyText(xml);
    	saveTextAsFile();
      //  var blob = new Blob([xml_text], {type: "text/plain;charset=utf-8"});
        } 
  
  function myUpdateFunction() {
	  var code = Blockly.JavaScript.workspaceToCode(workspace);
	  document.getElementById('textarea').value = code;
	}

  
  
  function saveLogstashConfigAsFile()
  { 
	  var code = Blockly.JavaScript.workspaceToCode(workspace);
  	
  	var textFileAsBlob = new Blob([code], {type:'text/plain'});
  	//var fileNameToSaveAs = "sample.txt";
  	var fileNameToSaveAs = document.getElementById("logstashConfigNameToSaveAs").value;
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
  
  function saveTextAsFile()
  { 
	var xml = Blockly.Xml.workspaceToDom(workspace);
  	var textToWrite = Blockly.Xml.domToPrettyText(xml);
  	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  	//var fileNameToSaveAs = "sample.txt";
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
  		var xml = Blockly.Xml.textToDom(textFromFileLoaded);
  		Blockly.mainWorkspace.clear();
  		Blockly.Xml.domToWorkspace(workspace, xml);
  	};
  	fileReader.readAsText(fileToLoad, "UTF-8");
  }
  function showConfig()
  {
	  var code = Blockly.JavaScript.workspaceToCode(workspace);
	  alert(code);
  }
  function clearWorkspace()
  {
	  Blockly.mainWorkspace.clear();
  }
