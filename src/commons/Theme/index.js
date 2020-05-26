import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: "#1976D2",
    secondary: "#CDDC39",
    error: "#D32F2F"
  },
  typography: {
    fontFamily: "Roboto"
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#7C4DFF",
    textColor: "#FFFFFF",
    boderColor: "#CCCCCC"
  }
});

export default theme;