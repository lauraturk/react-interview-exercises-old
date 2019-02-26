import Route from "@ember/routing/route";
import { A } from "@ember/array";

// TODO: Take out A and replace with simple array. Why doesn't it work?
export default Route.extend({
  model() {
    return A([{ color: "#4286f4", name: "blueish", stars: 0 }]);
  }
});
