import { visit, fillIn, findAll, click } from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | create-color", function(hooks) {
  setupApplicationTest(hooks);

  test("I can create a new color", async function(assert) {
    await visit("/");
    assert.equal(findAll(".card-container > div").length, 1);
    await fillIn("form > section > input", "my test color");
    await fillIn("#color-input", "#ffffff");
    await click("#submit");
    // TODO: verify that the color is correct
    assert.equal(findAll(".card-container > div").length, 2);
  });

  // TODO: add a test where you delete a color
  // TODO: add a test where you create a second color and delete the second color
  // TODO: add a test where you vote on the second color
  // TODO: add a test for changing the color
});
