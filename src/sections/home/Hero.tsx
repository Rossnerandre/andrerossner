import React, {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Box, styled} from "@mui/material";


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

const HeroHome = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);


  return (
    <Box
      // sx={{position: 'relative'}}
      sx={{
        overflow: 'hidden !important',
        height: '100vh !important',
        width: '100% !important',

      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        width={'100vw'}
        height={'100vh'}
        style={{
          height: "50vw !important",
        }}
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
      }}>
      </Box>

      <Box sx={{position: 'relative'}}>
        <PlanetStyled />
      </Box>
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
