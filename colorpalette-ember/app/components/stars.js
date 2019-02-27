import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default Component.extend({
  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    vote(id) {
      this.votingCallback(id);
    }
  },

  // Passed properties
  // ---------------------------------------------------------------------------
  votingCallback: () => undefined,
  stars: 0,

  layout: hbs`
    <button {{action "vote" 1}}>⭐</button>
    <button {{action "vote" 2}}>⭐</button>
    <button {{action "vote" 3}}>⭐</button>
    <button {{action "vote" 4}}>⭐</button>
    <button {{action "vote" 5}}>⭐</button>
    <p>stars: {{stars}}</p>
  `
});
