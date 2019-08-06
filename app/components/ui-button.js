// import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { computed } from "@ember/object";

const DEFAULT_BLUE = "#147fbd";

export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  backgroundColor: DEFAULT_BLUE,
  color: "#fff",
  onClick: () => null,
  type: "button",

  // Internal properties
  // ---------------------------------------------------------------------------
  style: computed("backgroundColor", "color", function() {
    return `background-color: ${this.backgroundColor}; color: ${this.color};`;
  }),

  // Events
  // ---------------------------------------------------------------------------
  click(e) {
    console.log("calling ui-button onClick method...");
    this.onClick();
  },

  // Ember Properties
  // ---------------------------------------------------------------------------
  attributeBindings: ["style", "type"],
  tagName: "button",
});
