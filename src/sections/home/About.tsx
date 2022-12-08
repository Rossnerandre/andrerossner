import {Container, Grid, Paper, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import Image from "next/image";

// ----------------------------------------------------------------------

const RootContainer = styled(Container)(() => ({
  background: '#333',
  marginBottom: '5rem',
  marginTop: '5rem',
}));

const ImageStyled = styled(Image)(({theme}) => ({
  borderRadius: '18px',
  boxShadow: theme.customShadows.z8,
}));

const GridImg = styled(Grid)(({theme}) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    marginBottom: '3rem',
  },
}));

const GridText = styled(Grid)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const PaperStyled = styled(Paper)(() => ({
  background: '#333',
  borderRadius: '18px',
  padding: '2rem',
  textAlign: 'justify',
  color: 'white',
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootContainer id={'about'}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{mb: 5}} textAlign={'center'}>
          <Typography variant={'h2'} color={'secondary'}>Sobre mim</Typography>
        </Grid>
        <GridImg item xs={12} md={6}>
          <ImageStyled
            src={'/assets/home/me.jpeg'} alt={'Me André Rossner'} width={300}
            height={400}/>
        </GridImg>
        <GridText item xs={12} md={6}>
          <PaperStyled elevation={4}>
            <Typography variant={'h3'} color={'secondary'} textAlign={'center'}>Olá sou André Rossner</Typography>
            <Typography variant={'h5'} color={'secondary'} textAlign={'center'}>Desenvolvedor Front-End</Typography>
            <br/>
            <Typography variant={'body1'}>
              Graduarao em Análise e desenvolvimento de sistemas, apaixonado por tecnologia, programação e inovação.
              Atualmente trabalho com desenvolvimento de software, focado em desenvolvimento web. Tenho experiência
              com desenvolvimento de aplicações web, utilizando tecnologias e ferramentas como React, TypeScript,
              JavaScript, HTML, CSS, PHP, MySQL, Firebase, UX/UI, Figma.
            </Typography>
            <br/>
            <Typography variant={'body1'}>
              Motiviado a aprender novas tecnologias e ferramentas, sempre buscando aperfeiçoamento e crescimento,
              adoro trocar experiências e conhecimentos com outras pessoas.
              Busco me adaptar as necessidades do mercado e das empresas, sempre buscando a melhor solução para o
              cliente.
            </Typography>
          </PaperStyled>
        </GridText>
      </Grid>
    </RootContainer>
  )
}
