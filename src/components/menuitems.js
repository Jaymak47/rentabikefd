import { TrackChanges, Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userMenuItems = [
  {
    text: "Home",
    icon: <TrackChanges color="success" />,
    path: "/",
    divider: <Divider />,
  },

  {
    text: "Bikes",
    icon: <Adjust color="success" />,
    path: "/bikes",
    divider: <Divider />,
  },
  {
    text: "Scooters",
    icon: <TrackChanges color="success" />,
    path: "/scooters",
    divider: <Divider />,
  },
  {
    text: "Reviews",
    icon: <Adjust color="success" />,
    path: "/",
    divider: <Divider />,
  },
];

export function getMenuItems() {
  return userMenuItems;
}
