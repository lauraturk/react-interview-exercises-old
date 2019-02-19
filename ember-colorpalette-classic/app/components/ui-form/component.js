import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

// TODO: Pull the submit() handler out and see the form reload
// TODO: Pull `form` out and see things break.
export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  onSubmit: () => null,

  // Internal methods
  // ---------------------------------------------------------------------------
  submit(e) {
    e.preventDefault();
  },

  // Template
  // ---------------------------------------------------------------------------
  // TODO: take out pre-wiring of submit button
  tagName: "form",
  layout: hbs`
    {{yield (hash
      label=(component "ui-form/label")
      input=(component "ui-form/input")
      submit=(component "ui-button" id="submit" onClick=onSubmit type="submit")
    )}}
  `
});