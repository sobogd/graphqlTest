import { createTheme } from "@mui/material";
import { teal, grey } from "@mui/material/colors";

export const backgroundDefault = grey[900];
export const textDefaultColor = grey[100];

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100%",
        },
        html: {
          height: "100%",
        },
        "#root": {
          height: "100%",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: backgroundDefault,
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: backgroundDefault,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 20,
          ".MuiChip-filled": {
            background: teal[600],
          },
          ".MuiChip-deleteIcon.MuiChip-deleteIconColorDefault": {
            color: grey[50],
            transition: "0.2s",
            ":hover": {
              color: grey[300],
            },
          },
          ".MuiAutocomplete-clearIndicator svg": {
            color: teal[600],
          },
          ".MuiAutocomplete-popupIndicator svg": {
            color: teal[600],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: grey[800],
        },
        root: {
          borderColor: grey[800],
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "::before": {
            display: "none",
          },
          "::after": {
            display: "none",
          },
        },
        input: {
          borderRadius: 5,
          background: grey[200],
          color: grey[700],
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: {
          color: grey[700],
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          color: grey[700],
          background: grey[200],
          borderRadius: 5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            background: grey[800],
          },
        },
        containedSizeLarge: {
          height: 56,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: "0",
          display: "flex",
          alignItems: "center",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
  palette: {
    secondary: {
      main: teal[600],
      contrastText: textDefaultColor,
    },
    primary: {
      main: teal[600],
      contrastText: textDefaultColor,
    },
    background: {
      default: grey[900],
    },
    text: {
      primary: textDefaultColor,
      secondary: textDefaultColor,
    },
  },
  typography: {
    h1: {
      color: textDefaultColor,
      fontWeight: 400,
      fontSize: 24,
      padding: 0,
      margin: 0,
    },
    h2: {
      color: textDefaultColor,
      fontWeight: 400,
      fontSize: 22,
      padding: 0,
      margin: 0,
    },
  },
});
