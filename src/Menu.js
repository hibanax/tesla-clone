import React from "react";
import "./Menu.scss";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <MenuItem title="Existing inventory" />
      <MenuItem title="Used inventory" />
      <MenuItem title="Trade-In" />
      <MenuItem title="Cybertruck" />
      <MenuItem title="Roadster" />
      <MenuItem title="Semi" />
      <MenuItem title="Charging" />
      <MenuItem title="Powerwall" />
      <MenuItem title="Commercial Energy" />
      <MenuItem title="Utilities" />
      <MenuItem title="Test Drive" />
      <MenuItem title="Find Us" />
      <MenuItem title="Support" />
      <MenuItem title="United States" />
    </div>
  );
}

export default Menu;
