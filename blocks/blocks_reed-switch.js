Blockly.Blocks['ky_025_reed_switch_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-025 REED SWITCH");
    this.appendValueInput("KY_025_REED_SWITCH_ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
    this.appendValueInput("KY_025_REED_SWITCH_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};