import { useState } from "react";
import products from "../products";
import CardsView from "./cardsview/CardsView";
import ListView from "./listview/ListView";
import IconSwitch from "./IconSwitch";

function Store() {
  const [currentIcon, setView] = useState("view_list");

  const handleSwitch = (icon) => {
    const newIcon = icon === "view_list" ? "view_module" : "view_list";
    setView(() => newIcon);
  };

  return (
    <div className={"store-container"}>
      <IconSwitch icon={currentIcon} onSwitch={handleSwitch} />
      {currentIcon === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}

export default Store;
