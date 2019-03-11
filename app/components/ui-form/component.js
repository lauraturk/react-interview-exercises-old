import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  onSubmit: () => null,

  // Internal methods
  // ---------------------------------------------------------------------------
  submit(e) {
    // Time to submit...
  },

  // Template
  // ---------------------------------------------------------------------------
  tagName: "form",
  layout: hbs`
    {{yield (hash
      label=(component "ui-form/label")
      input=(component "ui-form/input")
      submit=(component "ui-button" id="submit" type="submit")
    )}}
  `
});
