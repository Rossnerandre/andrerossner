import { createTheme } from '@mui/material/styles';
import typography from "./typography";
import palette from "./palette";
import shadows, {customShadows} from "./shadows";

const index = createTheme({
  shadows: shadows.light,
  customShadows: customShadows.light,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: palette.light,
});





export default index;