import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Typography>
            <AddBoxIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/" label="Product" />
            <Tab LinkComponent={NavLink} to="/addProduct" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/purchase" label="Purchase" />
            <Tab LinkComponent={NavLink} to="/stock" label="Stock" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
