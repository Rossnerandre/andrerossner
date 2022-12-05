import {ReactNode} from "react";
import MainHeader from "./MainHeader";
import {Box, Stack} from "@mui/material";


type Porps = {
  children: ReactNode;
}

export default function MainLayout({children}: Porps) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      {children}
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}