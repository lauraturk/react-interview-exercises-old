import { A } from "@ember/array";
import Route from "@ember/routing/route";

export default class Index extends Route {
  public model() {
    return A([{ color: "#4286f4", name: "blueish", stars: 0 }]);
  }
}
