import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    action: {
      hoverDenim: "#1976d20a",
      activeDenim: "#1976d217",
    },
    remove: {
      main: "#d32f2f",
      hover: "#ffc6c1",
    },
    background: {
      dark: "#00000080",
    },
  },
  shape: {
    bigBorderRadius: 10,
    paginationBorderRadius: 16,
  },
});



