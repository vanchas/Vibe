import React, { useState } from "react";
import ModelCabinetControl from "../components/model-cabinet/ModelCabinetControl";
import Reviews from "../components/model-cabinet/Reviews";
import Favorites from "../components/model-cabinet/Favorites";
import Ads from "../components/model-cabinet/Ads";
import Prices from "../components/model-cabinet/Prices";
import Balance from "../components/model-cabinet/Balance";
import Customize from "../components/model-cabinet/Customize";
import Support from "../components/model-cabinet/Support";

export default function ModelCabinet() {
  const [component, setComponent] = useState(<Favorites />);

  const changeComponent = (comp) => {
    if (comp === "favorites") {
      setComponent(<Favorites />);
    } else if (comp === "reviews") {
      setComponent(<Reviews />);
    } else if (comp === "ads") {
      setComponent(<Ads />);
    } else if (comp === "prices") {
      setComponent(<Prices />);
    } else if (comp === "balance") {
      setComponent(<Balance />);
    } else if (comp === "customize") {
      setComponent(<Customize />);
    } else if (comp === "support") {
      setComponent(<Support />);
    }
  };

  return (
    <div>
      <ModelCabinetControl setComponent={changeComponent} />
      {component}
    </div>
  );
}
