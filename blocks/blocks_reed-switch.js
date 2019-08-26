Blockly.Blocks["ky_025_reed_switch_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-025 REED SWITCH");
      this.appendDummyInput()
        .appendField("ANALOG PIN")
        .appendField(
          new Blockly.FieldTextInput("A0"),
          "KY_025_REED_SWITCH_ANALOG_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_025_REED_SWITCH_ANALOG_VALUE"),
          "KY_025_REED_SWITCH_ANALOG_VALUE"
        );
      this.appendDummyInput()
        .appendField("DIGITAL PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_025_REED_SWITCH_DIGITAL_PIN"
        )
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_025_REED_SWITCH_DIGITAL_VALUE"),
          "KY_025_REED_SWITCH_DIGITAL_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };