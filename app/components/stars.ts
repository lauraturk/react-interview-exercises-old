import { action } from "@ember-decorators/object";
import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { computed } from "@ember-decorators/object";

export default class Stars extends Component {
  public stars: number = 0;

  @computed("stars")
  get starArray() {
    const stars = Array(this.stars).fill("⭐");
    const empties = Array(5 - stars.length).fill("*️⃣");
    return [...stars, ...empties];
  }

  public layout = hbs`
    <p>
      Rating:<br>
      {{#each starArray as |star index|}}
        <button class="star-button" {{action "vote" index}}>{{star}}</button>
      {{/each}}
    </p>
  `;
  // Actions
  // ---------------------------------------------------------------------------
  @action
  public vote(score: number) {
    this.votingCallback(score + 1);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  public votingCallback: (score: number) => undefined = () => undefined;
}
