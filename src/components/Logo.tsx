import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

// eslint-disable-next-line react/display-name
const Logo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) => {

  const logo = (
    <Box
      component="img"
      src="/assets/logo.png"
      sx={{ width: 115, cursor: 'pointer', ...sx }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default Logo;
