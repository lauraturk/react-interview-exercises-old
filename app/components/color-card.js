import { computed } from "@ember/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

/**
 * This function calculates the "brightness" of the given color.
 * @param {String} hexCode - a hexcode value of the color (e.g. "#ff0000",
 *  which would be "computer red")
 * @returns {Number} - brightness of this color as a value from 0 - 1
 *  (0 being "completely dark" (i.e. black) and 1 being "completely bright" (i.e. white))
 *  this function is aware, however, that "pure green" (i.e. "#00ff00") is brighter than
 *  "pure blue" (i.e. "#0000ff").
 */
function brightness(hexCode) {
  // FIXME: parse color into three variables in order to find percent of each channel
  // --------------------------------------------------------------------------------
  // In a given color code (#aabbcc), the first two "digits" are for red (i.e. "aa"),
  // the second two digits are for green (i.e. "bb"), and the last two digits are for
  // blue (i.e. "cc"). Then figure out the overall percent of each color
  // (hint: "00" is 0% and "ff" is 100%)
  const percentRed = 0.5;
  const percentGreen = 0.5;
  const percentBlue = 0.5;

  // A bunch of color theory here: different colors don't contribute equally to brightness
  // NOTE: This code is correct; do not change.
  const redMultiplier = 77 / 255;
  const greenMultiplier = 28 / 255;
  const blueMultiplier = 150 / 255;

  return (
    redMultiplier * percentRed +
    greenMultiplier * percentGreen +
    blueMultiplier * percentBlue
  );
}

export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  card: null,
  deleteCallback: () => null,
  votingCallback: () => null,

  // Internal properties
  // ---------------------------------------------------------------------------
  buttonBackgroundColor: computed("card.color", function() {
    return brightness(this.card.color) > 0.5 ? "#000000aa" : "#ffffffaa";
  }),

  buttonColor: computed("card.color", function() {
    return brightness(this.card.color) > 0.5 ? "white" : "black";
  }),

  style: computed("card.color", function() {
    const color = brightness(this.card.color) > 0.5 ? "black" : "white";
    return `background-color: ${this.card.color}; color: ${color};`;
  }),

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    deleteCard() {
      console.log("card wants to delete");
      this.deleteCallback(this.card);
    },
    voteOnCard(value) {
      this.votingCallback(this.card, value);
    }
  },

  // Template
  // ---------------------------------------------------------------------------
  attributeBindings: ["style"],
  layout: hbs`
    <section class="{{styleNamespace}}__main">
      <h1>name: {{card.name}}</h1>
      <section class="{{styleNamespace}}__colorField">
        <p data-test={{hook "color-value" id=card.name}}>color: {{card.color}}</p>
        {{input hook=(hook "change-color" id=card.name) value=card.color type="color"}}
      </section>
      <Stars @name={{card.name}} @stars={{card.stars}} @votingCallback={{action "voteOnCard"}}/>
    </section>
    <section class="{{styleNamespace}}__actions">
      <UiButton
        data-test={{hook "delete-color" id=card.name}}
        @backgroundColor={{buttonBackgroundColor}}
        @color={{buttonColor}}
        @onClick={{action "deleteCard"}}
      >
        Delete
      </UiButton>
    </section>
  `
});
