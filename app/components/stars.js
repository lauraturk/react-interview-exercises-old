import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  name: "",
  stars: 0,
  votingCallback: (score) => null,

  // Template
  // ---------------------------------------------------------------------------
  layout: hbs`
    <button {{action votingCallback 1}} data-test={{hook "vote" name=name id=1}}>⭐</button>
    <button {{action votingCallback 2}} data-test={{hook "vote" name=name id=2}}>⭐</button>
    <button {{action votingCallback 3}} data-test={{hook "vote" name=name id=3}}>⭐</button>
    <button {{action votingCallback 4}} data-test={{hook "vote" name=name id=4}}>⭐</button>
    <button {{action votingCallback 5}} data-test={{hook "vote" name=name id=0}}>⭐</button>
    <p data-test={{hook "votes" name=name}}>stars: {{stars}}</p>
  `
});
