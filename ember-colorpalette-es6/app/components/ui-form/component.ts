import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default class UiForm extends Component {
  // Template
  // ---------------------------------------------------------------------------
  // TODO: take out pre-wiring of submit button
  public layout = hbs`
    {{yield (hash
      label=(component "ui-form/label")
      input=(component "ui-form/input")
      submit=(component "ui-button" id="submit" onClick=onSubmit type="submit")
    )}}
  `;
  // Passed properties
  // ---------------------------------------------------------------------------
  public onSubmit = () => undefined;
}
