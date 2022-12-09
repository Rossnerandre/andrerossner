import {motion} from 'framer-motion';
import {Box, Button, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import {varFade, varHover, varTranHover, MotionViewport} from "../animate";
import NextLink from "next/link";
import {ProjectItemProps,} from "./types";
// ----------------------------------------------------------------------

const BoxImg = styled(Box)(() => ({
  height: '200px',
  margin: '0 20px'
}));

const MotionBox = styled(motion.div)(() => ({
  background: '#333',
  borderRadius: '18px',
}));

// ----------------------------------------------------------------------

export default function CardProjectItem(props: ProjectItemProps) {
  const {title, image, description, url, fade} = props;
  return (
    <Box component={MotionViewport}
         whileHover="hover">
      <motion.div
        variants={varFade()[fade]}>
        <MotionBox
          variants={varHover(1.2)}
          transition={varTranHover()}
        >
          <Typography variant={'h3'} pb={3} pt={2} color={'secondary'}
                      textAlign={'center'}>{title}</Typography>
          <BoxImg sx={{
            background: `url(${image}) no-repeat center center / cover`
          }}/>

          <Box p={3}>
            <Typography variant={'body1'} color={'secondary'}
                        pb={3}
                        textAlign={'justify'}>{description}</Typography>
            <NextLink href={url} passHref>
              <Button variant={'contained'} color={'secondary'}>
                Ver mais
              </Button>
            </NextLink>
          </Box>
        </MotionBox>
      </motion.div>
    </Box>
  )
}
