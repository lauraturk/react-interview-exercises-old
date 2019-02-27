import { computed } from "@ember/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

const TEST = false;

function brightness(color) {
  // parse card.color into three variables
  const redness = 0.5;
  const blueness = 0.5;
  const greenness = 0.5;
  // A bunch of color theory here: different colors don't contribute equally to brightness
  const redMultiplier = 77 / 255; // because science
  const blueMultiplier = 150 / 255;
  const greenMultiplier = 28 / 255;
  return (
    redMultiplier * redness +
    blueMultiplier * blueness +
    greenMultiplier * greenness
  );
}

function toGrayscale(color) {
  return `hsl(0, 0%, ${brightness(color) * 100}%)`;
}

export default Component.extend({
  // Computed properties
  // ---------------------------------------------------------------------------
  style: computed("card.color", function() {
    const color = brightness(this.card.color) > 0.5 ? "black" : "white";
    if (TEST) {
      const backgroundColor = toGrayscale(this.card.color);
      return `background-color: ${backgroundColor}; color: ${color};`;
    }
    return `background-color: ${this.card.color}; color: ${color};`;
  }),

  buttonColor: computed("card.color", function() {
    return brightness(this.card.color) > 0.5 ? "white" : "black";
  }),

  buttonBackgroundColor: computed("card.color", function() {
    return brightness(this.card.color) > 0.5 ? "#000000aa" : "#ffffffaa";
  }),

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    editColor() {
      this.set("isEditing", !this.isEditing);
    },
    deleteCard() {
      console.log("card wants to delete");
      this.deleteCallback(this.card);
    },
    voteOnCard(value) {
      this.votingCallback(this.card, value);
    }
  },

  // Passed properties
  // ---------------------------------------------------------------------------
  deleteCallback: () => null,
  votingCallback: () => null,
  card: null,

  // Internal properties
  // ---------------------------------------------------------------------------
  isEditing: false,

  // TODO: click on the text field to edit the text value directly
  // Template
  // ---------------------------------------------------------------------------
  attributeBindings: ["style"],
  layout: hbs`
    <section class="{{styleNamespace}}__main">
      <h1>name: {{card.name}}</h1>
      <section class="{{styleNamespace}}__colorField">
        <p>color: {{card.color}}</p>
        {{input value=card.color type="color"}}
      </section>
      <Stars @stars={{card.stars}} @votingCallback={{action "voteOnCard"}}/>
    </section>
    <section class="{{styleNamespace}}__actions">
      <UiButton @backgroundColor={{buttonBackgroundColor}} @color={{buttonColor}} @onClick={{action "deleteCard"}}>Delete</UiButton>
    </section>
  `
});
