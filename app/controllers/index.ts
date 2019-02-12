import { action } from "@ember-decorators/object";
import { Card } from "../../types/ember-colorpalette/card";
import Controller from "@ember/controller";
import { set } from "@ember/object";

export default class Domains extends Controller {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  public addColor(value: Card) {
    this.model.pushObject(value);
  }

  @action
  public deleteColor(value: Card) {
    const index = this.model.reduce(
      (memo, card, idx) => (memo = card.name === value.name ? idx : memo),
      null
    );
    this.model.removeAt(index);
  }

  @action
  public voteOnColor(cardIndex: number, vote: number) {
    set(this.model, `${cardIndex}.stars`, vote);
  }
}
