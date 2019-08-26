Blockly.JavaScript["ky_025_reed_switch_block"] = function(block) {
    var text_ky_025_reed_switch_analog_pin = block.getFieldValue(
      "KY_025_REED_SWITCH_ANALOG_PIN"
    );
    var variable_ky_025_reed_switch_analog_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_025_REED_SWITCH_ANALOG_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_ky_025_reed_switch_digital_pin = block.getFieldValue(
      "KY_025_REED_SWITCH_DIGITAL_PIN"
    );
    var variable_ky_025_reed_switch_digital_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_025_REED_SWITCH_DIGITAL_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	
	#VARIABLE
	int KY_025_REED_SWITCH_DIGITAL_PIN = ${text_ky_025_reed_switch_digital_pin}; // KY-025 digital interface
	int KY_025_REED_SWITCH_ANALOG_PIN = ${text_ky_025_reed_switch_analog_pin}; // KY-025 analog interface
	#END

	#SETUP
	  pinMode(KY_025_REED_SWITCH_DIGITAL_PIN, INPUT);
	  pinMode(KY_025_REED_SWITCH_ANALOG_PIN, OUTPUT);
	#END

	// Read the digital interface
  	${variable_ky_025_reed_switch_digital_value} = digitalRead(KY_025_REED_SWITCH_DIGITAL_PIN); 
  	// Read the analog interface
  	${variable_ky_025_reed_switch_analog_value} = analogRead(KY_025_REED_SWITCH_ANALOG_PIN); 
  	delay(100);
    `;
    return code;
  };