'use client'

import { useState } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Explore, Notifications, Person } from "@mui/icons-material";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Explore" icon={<Explore />} />
      <BottomNavigationAction label="Notifications" icon={<Notifications />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};

export default Footer;
