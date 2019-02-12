import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { tagName } from "@ember-decorators/component";

@tagName("form")
export default class UiForm extends Component {
  // Template
  // ---------------------------------------------------------------------------
  public layout = hbs`
    {{yield (hash
      label=(component "ui-form/label")
      input=(component "ui-form/input")
      submit=(component "ui-button" id="submit" type="submit" onClick=onSubmit)
    )}}
  `;
  // Passed properties
  // ---------------------------------------------------------------------------
  public onSubmit = () => undefined;
}
