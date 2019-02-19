import {
  Card,
  CardCallback,
  VotingCallback
} from "../../types/ember-colorpalette/card";
import { action } from "@ember-decorators/object";
import { attribute } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

const TEST = false;

function brightness(color: string): number {
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

function toGrayscale(color: string): string {
  return `hsl(0, 0%, ${brightness(color) * 100}%)`;
}

export default class ColorCard extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("card.color")
  @attribute
  get style() {
    const color = brightness(this.card.color) > 0.5 ? "black" : "white";
    if (TEST) {
      const backgroundColor = toGrayscale(this.card.color);
      return `background-color: ${backgroundColor}; color: ${color};`;
    }
    return `background-color: ${this.card.color}; color: ${color};`;
  }

  @computed("card.color")
  get buttonColor() {
    return brightness(this.card.color) > 0.5 ? "white" : "black";
  }

  @computed("card.color")
  get buttonBackgroundColor() {
    return brightness(this.card.color) > 0.5 ? "#000000aa" : "#ffffffaa";
  }
  public card: Card = null;

  // Internal properties
  // ---------------------------------------------------------------------------
  public isEditing: boolean = false;

  // Template
  // ---------------------------------------------------------------------------
  public layout = hbs`
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
  `;

  // Actions
  // ---------------------------------------------------------------------------
  @action
  public editColor() {
    this.set("isEditing", !this.isEditing);
  }

  @action
  public deleteCard() {
    this.deleteCallback(this.card);
  }

  @action
  public voteOnCard(value: number) {
    this.votingCallback(this.card, value);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  public deleteCallback: CardCallback = () => undefined;
  public votingCallback: VotingCallback = () => undefined;
}
