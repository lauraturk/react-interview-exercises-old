import { visit, fillIn, find, findAll, click } from "@ember/test-helpers";
import { module, test } from "qunit";
import { hook } from "ember-hook";
import { setupApplicationTest } from "ember-qunit";

async function makeColor(name, hexCode) {
  await fillIn("form > section > input", name);
  await fillIn("#color-input", hexCode);
  await click("#submit");
}

module("Acceptance | create-color", function(hooks) {
  setupApplicationTest(hooks);

  test("I can create a new color", async function(assert) {
    await visit("/");
    assert.equal(findAll(".card-container > div").length, 1);
    await makeColor("my-test-color", "#ffffff");
    assert.equal(findAll(".card-container > div").length, 2);
  });
});
