import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";

export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  addCallback: (card) => null,

  // Internal properties
  // ---------------------------------------------------------------------------
  color: "",
  name: "",

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    reset() {
      this.set("name", "");
    },
    save() {
      const card = { name: this.name, color: this.color, stars: 0 };
      this.addCallback(card);
      this.set("name", "");
      this.set("color", "");
    },
  },

  // Template
  // ---------------------------------------------------------------------------
  layout: hbs`
    <UiForm @onSubmit={{action "save"}} as |form|>
      <section>
        {{#form.label}}Color name:{{/form.label}}
        {{form.input placeholder="my cool color" value=name}}
      </section>

      <section>
        {{#form.label}}Color:{{/form.label}}
        {{form.input id="color-input" value=color type="color"}}
      </section>

      <section>
        <UiButton @onClick={{action "reset"}}>Reset</UiButton>
        {{#form.submit}}Save{{/form.submit}}
      </section>
    </UiForm>
  `
});
