import {motion} from 'framer-motion';
import React, {useCallback, useEffect, useState} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Box, styled, Stack, StackProps, Typography, Container as ContainerMui} from "@mui/material";
import {MotionContainer, varFade} from '../../components/animate';


const particlesOptions = {
  background: {
    width: "50% !important",
    color: {
      // value: "#000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 20,
      },
      repulse: {
        distance: 50,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#000",
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 99,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "star",
    },
    size: {
      value: {min: 1, max: 3},
    },
  },
  canvas: {
    width: "10%",
  },
  detectRetina: true,
}


const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(
  ({theme}) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(40),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
);
const HeroHome = () => {
  const [load, isLoaded] = useState(false);
  const [loadBob, isLoadedBob] = useState(true);
  const [loadName, isLoadedName] = useState(false);
  const [loadOps, isLoadedOps] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    isLoaded(true);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      isLoadedBob(false);
      isLoadedOps(true);
    }, 3000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      isLoadedOps(false)
      isLoadedName(true);
    }, 5000)
  }, [])

  return (
    <Box
      sx={{
        overflow: 'hidden !important',
        height: '100vh !important',
        width: '100% !important',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        //@ts-ignore
        options={particlesOptions}
      />
      <Box sx={{
        width: "100%",
        height: '100vh',
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        position: 'absolute',
        top: 0,
        zIndex: -1,
      }} component={MotionContainer}>
        <ContainerMui>
          <ContentStyle>
            <motion.div variants={varFade().inDown}>
              <Typography variant="h1" sx={{color: 'common.white'}}>
                Bem vindo <br/>
                ao incrível <br/>
                mundo de <br/>
                {loadBob && <Typography component={'span'} variant="h1" sx={{color: 'secondary.main'}}>
                    Bob
                </Typography>}
              </Typography>
            </motion.div>
            {loadOps && (
              <motion.div variants={varFade().inRight}>
                <Typography component={'span'} variant="h1" sx={{color: 'secondary.main'}}>
                  Ops....
                </Typography>
              </motion.div>
            )}
            {loadName && (
              <motion.div variants={varFade().inRight}>
                <Typography component={'span'} variant="h1" sx={{color: 'secondary.main'}}>
                  André Rossner
                </Typography>
              </motion.div>
            )}


          </ContentStyle>
        </ContainerMui>
      </Box>

      {load &&
          <Box sx={{position: 'relative'}}>
              <PlanetStyled/>
          </Box>
      }
    </Box>
  )
}


const PlanetStyled = styled(Box)(({theme}) => ({
  height: '90vh',
  width: '90vh',
  position: 'absolute',
  top: '-150px',
  right: '-150px',
  overflowX: 'hidden',
  borderRadius: '50%',
  background: "linear-gradient(45deg, #000 30%, #fff 90%)",
  animation: 'turn 35s linear infinite',
  '@keyframes turn': {
    to: {
      transform: 'rotateZ(360deg)',
    }
  },
  [theme.breakpoints.down('md')]: {
    height: '50vh',
    width: '50vh',
  },
}));

export default HeroHome
