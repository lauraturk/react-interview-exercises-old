import Controller from "@ember/controller";
import { set } from "@ember/object";

export default Controller.extend({
  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    addColor(color) {
      console.log("addColor");
      this.model.pushObject(color);
    },
    deleteColor(card) {
      const index = this.model.reduce(
        (memo, color, idx) => (memo = color.name === card.name ? idx : memo),
        null
      );
      this.model.removeAt(index);
    },
    voteOnColor(card, score) {
      set(this.model, "0.stars", score);
    }
  }
});
