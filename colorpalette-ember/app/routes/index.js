import Route from "@ember/routing/route";
import { A } from "@ember/array";

export default Route.extend({
  model() {
    return A([{ color: "#4286f4", name: "blueish", stars: 0 }]);
  }
});
