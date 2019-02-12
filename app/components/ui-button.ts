// import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { action } from "@ember-decorators/object";
import { tagName, attribute } from "@ember-decorators/component";
import { computed } from "@ember-decorators/object";

const DEFAULT_BLUE = "#147fbd";

@tagName("button")
export default class UiButton extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("backgroundColor", "color")
  @attribute
  get style() {
    return `background-color: ${this.backgroundColor}; color: ${this.color};`;
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  public backgroundColor: string = DEFAULT_BLUE;
  public color: string = "#fff";
  @attribute public type = "button";

  // Passed properties
  // ---------------------------------------------------------------------------
  public task = null;

  // Callbacks
  // ---------------------------------------------------------------------------
  public onClick = () => undefined;

  // Actions
  // ---------------------------------------------------------------------------
  @action
  public click(e) {
    e.preventDefault();
    if (this.task) {
      this.task.perform();
    } else {
      this.onClick();
    }
  }
}
