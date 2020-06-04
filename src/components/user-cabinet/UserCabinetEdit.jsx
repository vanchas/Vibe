import React, { useState } from "react";
import s from "./user-edit.module.scss";
import UserFavorites from "./UserFavorites";
import UserEdit from "./UserEdit";
import UserReports from "./UserReports";
import UserCabinetControl from "./UserCabinetControl";
import UserPrices from "./UserPrices";
import UserBalance from "./UserBalance";
import Support from "../support/Support";

export default function UserCabinetEdit() {
  const [component, setComponent] = useState(<UserFavorites />);

  const changeComponent = (comp) => {
    if (comp === "favorites") {
      setComponent(<UserFavorites />);
    } else if (comp === "reports") {
      setComponent(<UserReports />);
    } else if (comp === "edit") {
      setComponent(<UserEdit />);
    } else if (comp === "prices") {
      setComponent(<UserPrices />);
    } else if (comp === "balance") {
      setComponent(<UserBalance />);
    } else if (comp === "support") {
      setComponent(<Support />);
    }
  };

  return (
    <div className={`${s.cabinet_wrap}`}>
      <UserCabinetControl setComponent={changeComponent} />
      {component}
    </div>
  );
}
