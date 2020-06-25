import React, { useState, useEffect } from "react";
import ModelCabinetControl from "../components/model-cabinet/ModelCabinetControl";
import Reviews from "../components/model-cabinet/Reviews";
import Favorites from "../components/model-cabinet/Favorites";
import Ads from "../components/model-cabinet/Ads";
import Prices from "../components/model-cabinet/Prices";
import Balance from "../components/model-cabinet/Balance";
import Customize from "../components/model-cabinet/Customize";
import Support from "../components/support/Support";
import { connect } from "react-redux";
import { createSupportTask, getAllUsersTasks, getFavoritesBusiness } from '../redux/actions/actions';

function ModelCabinet({ supportTasks, createSupportTask, getAllUsersTasks, getFavoritesBusiness }) {
  const [component, setComponent] = useState(<Ads />);

  useEffect(() => {
    getFavoritesBusiness();
  }, []);

  const changeComponent = (comp) => {
    if (comp === "favorites") {
      setComponent(<Favorites favorites={favorites} />);
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
      setComponent(<Support
        tasks={supportTasks}
        createSupportTask={createSupportTask}
        getAllUsersTasks={getAllUsersTasks} />);
    }
  };

  return (
    <div>
      <ModelCabinetControl setComponent={changeComponent} />
      {component}
    </div>
  );
}

const mapStateToProps = state => ({
  supportTasks: state.app.supportTasks,
  favorites: state.app.favorites
})

const mapDispatchToProps = {
  createSupportTask, getAllUsersTasks, getFavoritesBusiness
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelCabinet);
