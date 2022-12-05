import { motion, MotionProps } from 'framer-motion';
// @mui
import { Box, BoxProps } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

type Props = BoxProps & MotionProps;

interface TextAnimateProps extends Props {
  text: string;
}

export default function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps) {
  return (
    <Box
      component={motion.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </motion.span>
      ))}
    </Box>
  );
}
